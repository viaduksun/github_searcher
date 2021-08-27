import React, { useState, useEffect } from "react";
import getUserRepo from "../../api/getUserRepo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./UserCard.module.scss";
import { setCurrentUser, setCurrentUserRepo } from "../../store/users/actions";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [userRepo, setUserRepo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getUserRepo(user.repos_url)
      .then((response) => {
        if (response) {
          console.log(response);
          setUserRepo(response.data);
        }
      })
      .catch((err) => {
        /* Do something with error, e.g. show error to user */
        console.log(err.response);
        setError(err.response.data.message);
      });
  }, [user.repos_url, dispatch]);

  const handleClick = () => {
    dispatch(setCurrentUser(user));
    dispatch(setCurrentUserRepo(userRepo));
  };

  return (
    <Link
      exact
      to="/userPage"
      className={styles.UserCard}
      onClick={handleClick}
    >
      <div className={styles.avatar}>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className={styles.userName}>{user.login}</div>
      <div className={styles.repo}>Repo: {userRepo ? userRepo.length : 0}</div>
    </Link>
  );
};

export default UserCard;
