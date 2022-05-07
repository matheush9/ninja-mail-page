import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.component}>
      <img
        className={styles.logoImage}
        src="/images/ninja-mail-logo.svg"
        alt=""
      />
      <div>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Partners</li>
          <li>About Us</li>
          <li>Tutorials</li>
          <li>Resources</li>
          <li>Help Center</li>
          <li>Templates</li>
          <li>Case Studies</li>
          <li>Medium</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Contact US</li>
          <li>Slack</li>
          <li>Jobs</li>
        </ul>
        <hr />

        <div>
          <p className={styles.raleway700}>
            {" "}
            NinjaMail is a sample project for Quest AI.
          </p>
          <p className={styles.raleway700}>
            &copy; 2019 Quest AI, All rights deserved.
          </p>
        </div>
        <br />
        <br />
        <div>
          <p className={styles.raleway700}>Terms & Conditions</p>
          <p className={styles.raleway700}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
