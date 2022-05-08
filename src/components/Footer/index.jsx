import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <img
          className={styles.logoImage}
          src="/images/ninja-mail-logo.svg"
          alt=""
        />
        <div className={styles.wrapper}>
          <ul>
            <div>
              <li>Features</li>
              <li>Pricing</li>
              <li>Services</li>
              <li>Partners</li>
            </div>
            <div>
              <li>About Us</li>
              <li>Tutorials</li>
              <li>Resources</li>
              <li>Help Center</li>
              <li>Templates</li>
              <li>Case Studies</li>
            </div>
            <div>
              <li>Medium</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </div>
            <div>
              <li>Contact US</li>
              <li>Slack</li>
              <li>Jobs</li>
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.copyrightContainer}>
        <div>
          <p className={styles.raleway700}>
            NinjaMail is a sample project for Quest AI.
          </p>
          <p className={styles.raleway700}>
            &copy; 2019 Quest AI, All rights deserved.
          </p>
        </div>
        <br />
        <br />
        <p className={styles.raleway700}>Terms & Conditions</p>
        <p className={styles.raleway700}>Privacy Policy</p>
      </div>
    </div>
  );
}
