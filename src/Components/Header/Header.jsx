import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>GitHub Searcher</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
