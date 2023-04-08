import React from "react";
import styles from "../styles/contactMe.module.css";
import Image from "next/image";
interface ContactMeProps {
    email: String,
    linkedIn: string,
    github: string
}

const ContactMe = (props: ContactMeProps) => {

    return <div className={"animation-container"}>
    <div className={styles.wrapper}>
        <div className={styles.link_group}>
            <a href={"mailto: " + props.email} className="hover:bg-gray-500">{props.email}
                <img className={styles.envelope} src={"/envelope.svg"} alt={"Email Logo"}/></a>
            <a href={props.linkedIn} className="hover:bg-gray-500">LinkedIn
                <img src={"/LI-In-Bug.png"} alt={"LinkedIn Logo"}/></a>
            <a href={props.github} className="hover:bg-gray-500">Github
                <img src={"/github-mark-white.svg"} alt={"Github Logo"}/></a>
        </div>
    </div></div>
}

export default ContactMe;