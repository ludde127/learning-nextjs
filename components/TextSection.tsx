import React, {ReactElement, ReactNode} from "react";
import styles from  "../styles/textSection.module.css";
import AvatarImage from "@/components/AvatarImage";

interface TextSegmentProps {
    title: String
}


const TextSection = ({children, title, imageSrc}: {children: React.ReactNode, title: String, imageSrc?: String}) => {

    let image = <></>;
    if (imageSrc) {
        image = <AvatarImage src={imageSrc}/>
    }

    return (
        <section className="animation-container-fit-content" id={title as string}>
        <div className={styles.text_section}>
            <div className={styles.text_holder}>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            {image}
        </div>
        </section>);
}

export default TextSection;