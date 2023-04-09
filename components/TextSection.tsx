import React from "react";
import styles from  "../styles/textSection.module.css";
import AvatarImage from "@/components/AvatarImage";


const TextSectionBase = ({children, title, imageSrc, dangerouslySetInnerHTML}: {children?: React.ReactNode, title: String, imageSrc?: String, dangerouslySetInnerHTML?: string}) => {

    let image = <></>;
    if (imageSrc) {
        image = <AvatarImage src={imageSrc}/>
    }

    let text: JSX.Element;

    if (dangerouslySetInnerHTML != null) {
        text = <p className="show-white-space" dangerouslySetInnerHTML={{__html: dangerouslySetInnerHTML}}></p>
    } else {
        text = <p className="show-white-space">{children}</p>
    }

    return (
        <section className="animation-container-fit-content rounded-3xl border-2" id={title as string}>
        <div className={styles.text_section}>
            <div className={styles.text_holder}>
                <div className="centered">
                    <h2>{title}</h2>
                </div>
                {text}
            </div>
            {image}
        </div>
        </section>);
}

const TextSection = ({children, title, imageSrc, dangerouslySetInnerHTML}:
                             {children?: React.ReactNode, title: String, imageSrc?: String, dangerouslySetInnerHTML?: string}) => {
    return <section className="animation-container-fit-content" id={title as string}>
        {TextSectionBase({children, title, imageSrc, dangerouslySetInnerHTML})}
    </section>
}

const FlexTextSection = ({children, title, imageSrc, dangerouslySetInnerHTML}:
                         {children?: React.ReactNode, title: String, imageSrc?: String, dangerouslySetInnerHTML?: string}) => {
    return <section className="animation-container-fit-content basis-1/2" id={title as string}>
        {TextSectionBase({children, title, imageSrc, dangerouslySetInnerHTML})}
    </section>
}


export {TextSection, FlexTextSection, TextSectionBase};