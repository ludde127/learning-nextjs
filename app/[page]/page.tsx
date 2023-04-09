import {cmsServer, fetcher, redHatDisplay} from "@/app/utils";
import {TextSectionBase} from "@/components/TextSection";
import Title from "@/components/Title";
import ContactMe from "@/components/ContactMe";
import NavBar from "@/components/NavBar";
import Script from "next/script";

/*
* {"page": [{"model": "personal_site_content.page", "pk": 1, "fields": {"page_title": "Index"}}],
*  "textSections": [{"model": "personal_site_content.textsection", "pk": 1,
*  "fields": {"page": 1, "title": "test title", "text": "this is some example text.
*  What happends if i add more text. when will it overflow?\r\n\r\ncan
*  i add new sentences?\r\n\r\n<a href=\"https://llindholm.com\">[!IMG]</a>",
*  "image": "Screenshot_from_2023-03-10_13-10-00.png", "image_alt": "", "weight": 123}}], "test": 1}*/
type ApiPageResponse = {
    page: PageInterface,
    textSections: TextSectionApi[]
}

type PageInterface = {
    model: String,
    pk: bigint,
    fields: {
        page_title: string
        intro: string,

    }
}

interface TextSectionApi {
    model: string,
    pk: bigint,
    fields: {
        title: string,
        text: string,
        image: string,
        image_alt: string,
        weight: number,
        page: bigint
    }
}


const apiTextSectionDataToTextSection = (obj: TextSectionApi) => {

    let modifiedHtml = obj.fields.text; // This is the base html to be rendered

    // Insert the image gotten from the api request
    if (obj.fields.image) {
        let imageUrl = cmsServer+"media/"+obj.fields.image;

        modifiedHtml = modifiedHtml.replace("[!IMG]",
            `<Image src="${imageUrl}" class="project-img" alt="${obj.fields.image_alt}"/>`);
    } else {
        modifiedHtml = modifiedHtml.replace("[!IMG]", "");
    }

    // TODO DONT SET THIS SO UNSAFELY
    return <TextSectionBase title={obj.fields.title} dangerouslySetInnerHTML={modifiedHtml}/>;
}


export default async function Page(params: {params: { page: String }, searchParams: any}) {
    let page = params.params.page;

    // GEt the page data

    let data: ApiPageResponse = await fetcher(cmsServer + "personal-site/api/page/" + page,
        { next: { revalidate: 60*60 } });
    let textSections : JSX.Element[];

    if (data) {
        textSections =
            data.textSections.sort((a: TextSectionApi, b: TextSectionApi) =>
                b.fields.weight-a.fields.weight). // The one with the highest weight should be first
                map((obj: TextSectionApi) => apiTextSectionDataToTextSection(obj));
    } else {
        textSections = [<p className="error-p" key="error-loading">Could not load data</p>];
    }
    console.log(textSections)
    let firstTextSection = textSections.shift();




    return (<>
        <div className={redHatDisplay.className}>
            <div className="main-window">
                <div className="centered full-width">
                    <Title>{data.page.fields.page_title}</Title>
                    <ContactMe email={"ludvig@llindholm.com"}
                               github={"https://github.com/ludde127"}
                               linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>
                    <div className="flex flex-col sm:flex-row flex-wrap flex-auto gap-11 w-fit mx-auto p-1 my-3">
                        <div className="w-fit mx-auto">
                            <NavBar/>
                        </div>
                        <section className="animation-container-fit-content text-section w-fit mx-auto rounded-3xl border-2">
                            {firstTextSection}
                        </section>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {textSections.map((t, i) =>
                            <section className="animation-container-fit-content
                         text-section rounded-3xl border-2 w-fit h-fit" key={"project"+i}>{t}</section>
                        )}

                    </div>
                </div>
            </div>
        </div>
        <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></Script>
    </>);
}