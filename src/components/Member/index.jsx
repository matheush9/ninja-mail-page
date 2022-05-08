/* eslint-disable @next/next/no-img-element */
import styles from "./member.module.scss";

export default function Member(props) {
  console.log(props.nome);
  return (
    <div id="partners" className={styles.component}>
      <img src={props.srcImage} alt="" />
      <div className={styles.text}>
        <p className={styles.raleway800}>{props.nome}</p>
        <p className={styles.raleway700}>Member since {props.since}</p>
      </div>
    </div>
  );
}
