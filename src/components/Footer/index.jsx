import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.component}>
      <img src="/images/ninja-mail-logo.png" alt="" />
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
          <p> NinjaMail is a sample project for Quest AI.</p>
          <p>&copy; 2019 Quest AI, All rights deserved.</p>
        </div>
        <br />
        <br />
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
