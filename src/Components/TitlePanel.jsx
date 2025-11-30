import React, { useState, useEffect } from "react";
import styles from "./TitlePanel.module.css";
import Clock from "./Clock";

const TitlePanel = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={`${styles.sairaStencilOneRegular} ${styles.title}`}>
          Atmos
          <span
            className={`${styles.sairaStencilOneRegular} ${styles.version}`}>
            v0.0.1
          </span>
        </h1>

        <Clock />
      </div>
    </>
  );
};

export default TitlePanel;
