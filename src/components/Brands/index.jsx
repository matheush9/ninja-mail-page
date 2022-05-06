/* eslint-disable @next/next/no-img-element */
import styles from "./brands.module.scss";

export default function Brands() {
  return (
    <div className={styles.component}>
      <h3>All the best brands already use us.</h3>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/images/dragon-eye-logo.png" alt="" />
        </div>
        <div className={styles.item}>
          <img src="/images/game-commerce-logo.png" alt="" />
        </div>
        <div className={styles.item}>
          <img src="/images/last-knight-logo.png" alt="" />
        </div>
        <div className={styles.item}>
          <img src="/images/radio-tee-logo.png" alt="" />
        </div>
        <div className={styles.item}>
          <img src="/images/quest-ai-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
