import react, { useState } from "react";
import styles from "./learnhow.module.scss";

export default function LearnHow() {
  const [state, setState] = useState(true);

  const showMessage = () => {
    setState(false);
  };

  return (
    <div className={styles.component}>
      <h2>Learn how others are reaching their audience easier than before.</h2>
      <input type="email" placeholder="Enter your email" />
      <p className={state ? styles.none : styles.raleway500}>
        Thanks! Email receveid
      </p>
      <button onClick={showMessage}>JOIN OUR LIST</button>
    </div>
  );
}
