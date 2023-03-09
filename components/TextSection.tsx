import React, {ReactElement, ReactNode} from "react";
import styles from  "../styles/textSection.module.css";

interface TextSegmentProps {
    title: String
}


const TextSection = ({children, title}: {children: React.ReactNode, title: String}) => {


    return (
        <div className="animation-container">
        <div className={styles.text_section}>
            <hr/>
            <div className={styles.text_holder}>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>

        </div>
        </div>);
}

export default TextSection;