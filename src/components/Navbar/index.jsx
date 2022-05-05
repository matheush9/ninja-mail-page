/* eslint-disable @next/next/no-img-element */
import styles from "./navbar.module.scss";
import Image from "next/dist/client/image";

export default function Navbar() {
  return (
    <div className={styles.component}>
      <img
        className={styles.logoImage}
        alt=""
        src={"/images/ninja-mail-logo.png"}
      />
      <button>SIGN UP FREE</button>
    </div>
  );
}
