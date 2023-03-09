import TextSection from "@/components/TextSection";
import ContactMe from "@/components/ContactMe";
import Title from "@/components/Title";
import AvatarImage from "@/components/AvatarImage";
export default function hello_world() {

    return (<>

    <div className="mx-auto main-window">
        <Title>Hello, World!</Title>

        <TextSection title="Ludvig Lindholm" >
            <strong>Hej!</strong><br/>
            Jag är en person som gillar att programmera en massa olika saker, specielt webbsidor!<br/><br/>
            Nedan kan ni se några om mina projekt som jag har jobbat med.
        </TextSection>
        <TextSection title="Test2">Detta är ytterligare en textsection!</TextSection>
        <ContactMe email={"ludvig@llindholm.com"}
                   github={"https://github.com/ludde127"}
                   linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>
        <img src={"/red-tree.png"} className="tree-image"></img>
    </div>
    </>);
}