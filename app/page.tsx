import TextSection from "@/components/TextSection";
import ContactMe from "@/components/ContactMe";
import Title from "@/components/Title";
import AvatarImage from "@/components/AvatarImage";

export const metadata = {
    title: "Ludvig Lindholm",
    description: "Ludvig Lindholm, utvecklar små till mellanstora hemsidor som är snabba och har många funktioner."
}

export default function hello_world() {

    return (<>

    <div className="mx-auto main-window">
        <Title>Välkommen!</Title>
        <ContactMe email={"ludvig@llindholm.com"}
                   github={"https://github.com/ludde127"}
                   linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>
        <TextSection title="Ludvig Lindholm" >

            <strong>Hej!</strong><br/>
            Jag är en person som gillar att programmera en massa olika saker, specielt webbsidor!<br/>
            Att göra hemsidor lätta att använda, snabba, samt fullstoppade av funktionallitet är något jag alltid strävar efter!
            <br/><br/>

            Nedan kan ni se några om mina projekt som jag har jobbat med.
        </TextSection>
        <TextSection title="CLterapi">

            Den största och kanske häftigaste hemsidan jag skapat är
            <a className="normal-a" href="https://clterapi.se/"> CLterapi</a>.<br/>
            <a className="normal-a" href="https://clterapi.se/"><img className="project-img" src="/cropped-cl.png"></img></a>
            <br/>
            CLterapi har ett inbyggt tidsbokningssytem samt betalningssystem där swish stödjs som betalningssätt.<br/>
            Innerhållet på hemsidans kan även lätt redigeras via ett CMS vilket gör det<br/>
            lätt och smidigt att ändra texten och bilder efter behov.
        </TextSection>
        <TextSection title={"LLindholm"}>
            En annan hemsida som jag har skapat är <a className="normal-a" href="https://llindholm.com/"> LLindholm</a>.<br/>
            <a className="normal-a" href="https://llindholm.com/"><img className="project-img" src="/llindholm.png"/></a>
            Denna hemsida skapade jag för att kunna spara temperatur data från min lägenhet men gick sedan över till<br/>
            att vara en hemsida för massa olika saker som jag har velat skapa. <br/>
            Nu finns det exempelvis en sida där man kan skriva anteckningar med flashcards, <br/>
            det finns även funktionallitet för att automatisk ladda Tesla bilar när elpriset är billigast.
        </TextSection>

    </div>
    </>);
}