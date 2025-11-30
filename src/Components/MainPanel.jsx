import { React } from "react";
import styles from "./MainPanel.module.css";

export default function MainPanel() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.displayColumn}>
          <div className={styles.imageDisplay}></div>
          <div className={styles.textDisplay}>
            <h1 className={styles.monomaniacOneRegular}>65&deg;F</h1>
          </div>
        </div>
        <div className={`${styles.textColumn} ${styles.monomaniacOneRegular}`}>
          <div className={styles.textBox} id={styles.noBorder}>
            <p className={styles.text}>Feels like: 55&deg;</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>Partly cloudy</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>Humidity: 49%</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>Pressure: 10bar</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>Wind: 10mph</p>
          </div>
        </div>
      </div>
    </>
  );
}
