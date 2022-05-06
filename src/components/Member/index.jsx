/* eslint-disable @next/next/no-img-element */
import styles from "./member.module.scss";

export default function Member(props) {
  console.log(props.nome);
  return (
    <div className={styles.component}>
      <img src={props.srcImage} alt="" />
      <div className={styles.text}>
        <p>{props.nome}</p>
        <p>Member since {props.since}</p>
      </div>
    </div>
  );
}
