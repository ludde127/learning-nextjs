import React from "react";
import styles from "../styles/title.module.css";




const Title = ({children}: {children: React.ReactNode}) => {
    return <div className="animation-container-fit-content centered">
        <h1 className={styles.megaTitle}>{children}</h1>
    </div>
}

export default Title;