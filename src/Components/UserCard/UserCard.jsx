import React, { useState, useEffect } from "react";
import getUserRepo from "../../api/getUserRepo";
import styles from "./UserCard.module.scss";

const UserCard = ({ user, repo }) => {
  // const [userRepo, setUserRepo] = useState(null);
  // useEffect(() => {
  //   getUserRepo(user.repos_url).then((response) => {
  //     console.log(response);
  //     setUserRepo(response);
  //   });
  // }, [user.repos_url]);
  console.log(user);
  return (
    <div className={styles.UserCard}>
      <div className={styles.avatar}>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className={styles.userName}>{user.login}</div>
      <div className={styles.repo}>Repo: {user.login}</div>
    </div>
  );
};

export default UserCard;
