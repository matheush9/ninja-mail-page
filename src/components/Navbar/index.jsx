/* eslint-disable @next/next/no-img-element */
import styles from "./navbar.module.scss";
import Image from "next/dist/client/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.component}>
      <img
        className={styles.logoImage}
        alt=""
        src={"/images/ninja-mail-logo.svg"}
      />
      <div className={styles.container}>
        <Link href="#features">
          <a>FEATURES</a>
        </Link>
        <Link href="#pricing">
          <a>PRICING</a>
        </Link>
        <Link href="#services">
          <a>SERVICES</a>
        </Link>
        <Link href="#partners">
          <a>PARTNERS</a>
        </Link>
        <button>SIGN UP FREE</button>
      </div>
    </div>
  );
}
