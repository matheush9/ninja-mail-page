/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <img className={styles.heroImage} src="/images/hero-image.png" alt="" />
      </div>

      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            <span>Create Stunning</span>Email <br />
            Campaigns
          </h1>
        </div>

        <p className={styles.raleway500}>
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>

        <div className={styles.btns}>
          <button>TRY NOW</button>
          <button>GET A DEMO</button>
        </div>
      </div>
    </div>
  );
}
