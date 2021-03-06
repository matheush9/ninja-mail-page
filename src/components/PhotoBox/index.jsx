/* eslint-disable @next/next/no-img-element */
import styles from "./photobox.module.scss";

export default function PhotoBox(props) {
  return (
    <div className={styles.component}>
      <img src={props.srcImage} alt="" />
      <div className={styles.text}>
        <p className={styles.raleway500}>{props.texto}</p>
        <p className={styles.raleway800}>Learn More &gt;</p>
      </div>
    </div>
  );
}
