import {cmsServer, getPage, getPages, redHatDisplay} from "@/app/utils";
import {TextSection} from "@/components/TextSection";
import Title from "@/components/Title";
import ContactMe from "@/components/ContactMe";
import NavBar from "@/components/NavBar";

import {Metadata} from "next";

type ApiPageResponse = {
    page: PageInterface,
    textSections: TextSectionApi[]
}

type PageInterface = {
    model: String,
    pk: bigint,
    fields: {
        page_title: string,
        browser_title: string,
        intro: string,
        seo_description: string
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

export async function generateMetadata(
    {params} : {params: { page: string }},
): Promise<Metadata> {
    const page: ApiPageResponse = await getPage(params.page);
    return { title: page.page.fields.browser_title,
        description: page.page.fields.seo_description ? page.page.fields.seo_description : page.page.fields.browser_title}

}

//export const metadata : Metadata =  {title: "asdjkasdl"}


export const revalidate = 600;

const apiTextSectionDataToTextSection = (obj: TextSectionApi) => {

    let modifiedHtml = obj.fields.text; // This is the base html to be rendered

    // Make it into paragraphs

    let split: string[] = modifiedHtml.split("\n")
    modifiedHtml = split.map(s => "<p>" + s + "</p>").join("")
    // Insert the image gotten from the api request
    let imageUrl: string | undefined = undefined;
    if (obj.fields.image) {
        imageUrl = cmsServer+"media/"+obj.fields.image;
    }

    // It is no longer allowed to inject image.
    modifiedHtml = modifiedHtml.replace("[!IMG]", "");


    // TODO DONT SET THIS SO UNSAFELY
    return <TextSection title={obj.fields.title} key={obj.fields.title} imageSrc={imageUrl} imageAlt={obj.fields.image_alt} dangerouslySetInnerHTML={modifiedHtml}/>;
}


export default async function Page(params: {params: { page: string }, searchParams: any}) {
    let page = params.params.page;

    // GEt the page data

    let data: ApiPageResponse = await getPage(page);
    let textSections : JSX.Element[];
    //console.log(data);
    if (data) {
        textSections =
            data.textSections.sort((a: TextSectionApi, b: TextSectionApi) =>
                b.fields.weight-a.fields.weight). // The one with the highest weight should be first
                map((obj: TextSectionApi) => apiTextSectionDataToTextSection(obj));
    } else {
        textSections = [<p className="error-p" key="error-loading">Could not load data</p>];
    }
    //console.log(textSections)
    //let firstTextSection = textSections.shift();
    let number_of_pages = (await getPages()).length; // Only show navbar when more than one page
    return (<>
        <div className={redHatDisplay.className}>
            <div className="main-window">
                <div className="centered full-width">
                    <Title>{data.page.fields.page_title}</Title>
                    <ContactMe email={"ludvig@llindholm.com"}
                               github={"https://github.com/ludde127"}
                               linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>

                    {number_of_pages > 0 ? <NavBar/> : null}
                    {textSections}

                </div>
            </div>
        </div>
    </>);
}