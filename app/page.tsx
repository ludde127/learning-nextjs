import {TextSectionBase} from "@/components/TextSection";
import ContactMe from "@/components/ContactMe";
import Title from "@/components/Title";
import {Open_Sans} from "next/font/google";


const redHatDisplay = Open_Sans({subsets: ["latin"]});
export const metadata = {
    title: "Ludvig Lindholm",
    description: "Ludvig Lindholm, utvecklar små till mellanstora hemsidor som är snabba och har många funktioner.",

}

const cmsServer = "https://llindholm.com/";

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());


interface TextSectionApi {
    model: string,
    pk: bigint,
    fields: {
        title: String,
        text: string,
        image: string,
        image_alt: string,
        weight: bigint
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

export default async function personalSite() {
    let data: any | null = null;
    try {
        data = await fetcher(cmsServer + "personal-site/api/");
    } catch (e) {}
    let textSections: JSX.Element[];

    if (data != null) {
        textSections =
            data.sort((a: TextSectionApi, b: TextSectionApi) => b.fields.weight-a.fields.weight). // The one with the highest weight should be first
            map((obj: TextSectionApi) => apiTextSectionDataToTextSection(obj));
    } else {
        textSections = [<p className="error-p" key="error-loading">Could not load data</p>];
    }

    let firstTextSection = textSections.shift();

    return (<>
    <div className={redHatDisplay.className}>
    <div className="main-window">
        <div className="centered full-width">
            <Title>Välkommen!</Title>
            <ContactMe email={"ludvig@llindholm.com"}
                       github={"https://github.com/ludde127"}
                       linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>
            <section className="animation-container-fit-content centered border-bottom ">
                {firstTextSection}
            </section>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap flex-auto">

                {textSections.map((t, i) =>
                    <section className="animation-container-fit-content basis-1/2" key={"project"+i}>{t}</section>
                )}

        </div>
    </div>
    </div>
    </>);
}