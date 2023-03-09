import TextSection from "@/components/TextSection";
import ContactMe from "@/components/ContactMe";
import Title from "@/components/Title";
export default function hello_world() {
    let test: String = "adsadkl";

    return (
    <div className="mx-auto main-window">
        <Title>Hello, World!</Title>
        <TextSection title="Testing" >{test}</TextSection>
        <TextSection title="Test2">Detta är ytterligare en textsection!</TextSection>
        <ContactMe email={"ludvig@llindholm.com"}
                   github={"https://github.com/ludde127"}
                   linkedIn={"https://www.linkedin.com/in/ludvig-lindholm-6509b4256/"}/>
    </div>
    );
}