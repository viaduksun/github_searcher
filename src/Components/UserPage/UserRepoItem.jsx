/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./UserPage.module.scss";

const UserRepoItem = ({ repo }) => {
  return (
    <a href={repo.clone_url} target="_blank">
      <div className={styles.repoItem}>
        <h1 className={styles.repoTitle}>{repo.name}</h1>
        <div className={styles.repoInfo}>
          <p>{repo.forks} Forks</p>
          <p>{repo.stargazers_count} Stars</p>
        </div>
      </div>
    </a>
  );
};

export default UserRepoItem;
