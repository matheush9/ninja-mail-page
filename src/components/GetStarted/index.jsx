import styles from "./getstarted.module.scss";

export default function GetStarted() {
  return (
    <div className={styles.component}>
      <h3>Get started today!</h3>
      <button>PICK A PLAN</button>
    </div>
  );
}
