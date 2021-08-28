import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link exact to="/">
            <IconButton aria-label="gitHub">
              <GitHubIcon size="large" />
            </IconButton>
          </Link>
          <h1 className={styles.headerTitle}>GitHub Searcher</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
