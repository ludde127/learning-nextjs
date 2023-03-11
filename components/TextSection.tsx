import React, {ReactElement, ReactNode} from "react";
import styles from  "../styles/textSection.module.css";
import AvatarImage from "@/components/AvatarImage";

interface TextSegmentProps {
    title: String
}


const TextSection = ({children, title, imageSrc, dangerouslySetInnerHTML}: {children?: React.ReactNode, title: String, imageSrc?: String, dangerouslySetInnerHTML?: string}) => {

    let image = <></>;
    if (imageSrc) {
        image = <AvatarImage src={imageSrc}/>
    }

    let text: JSX.Element;

    if (dangerouslySetInnerHTML != null) {
        text = <text className="show-white-space" dangerouslySetInnerHTML={{__html: dangerouslySetInnerHTML}}></text>
    } else {
        text = <text className="show-white-space">{children}</text>
    }

    return (
        <section className="animation-container-fit-content" id={title as string}>
        <div className={styles.text_section}>
            <div className={styles.text_holder}>
                <h2>{title}</h2>

                {text}
            </div>
            {image}
        </div>
        </section>);
}

export default TextSection;