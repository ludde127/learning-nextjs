import styles from "../styles/avatar.module.css";

const AvatarImage = ({src}: {src: String}) => {
    return <>
        <img className={styles.image} src={src as string} alt={"Me"}></img>
    </>
}

export default AvatarImage;