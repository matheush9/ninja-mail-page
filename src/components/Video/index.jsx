import styles from "./video.module.scss";

export default function Video() {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <img src="/images/video.jpg" alt="" />
        <div className={styles.videoText}>
          <h2>Reach More Customers</h2>
          <button>LEARN HOW</button>
        </div>
      </div>
    </div>
  );
}
