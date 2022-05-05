/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.text}>
        <h1>
          <span>Create Stunning</span>Email <br />
          Campaigns
        </h1>
      </div>

      <div>
        <img className={styles.heroImage} src="/images/hero-image.jpg" alt="" />
      </div>
    </div>
  );
}
