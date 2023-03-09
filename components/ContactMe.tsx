import React from "react";
import styles from "../styles/contactMe.module.css";
interface ContactMeProps {
    email: String,
    linkedIn: string,
    github: string
}

const ContactMe = (props: ContactMeProps) => {

    return <div className={"animation-container"}>
    <div className={styles.wrapper}>
        <div className={styles.link_group}>
            <a href={"mailto: " + props.email}>{props.email}<img className={styles.envelope} src={"/envelope.svg"} alt={"Email Logo"}/></a>
            <a href={props.linkedIn}>LinkedIn <img src={"/LI-In-Bug.png"} alt={"LinkedIn Logo"}/></a>
            <a href={props.github}>Github <img src={"/github-mark-white.svg"} alt={"Github Logo"}/></a>
        </div>
    </div></div>
}

export default ContactMe;