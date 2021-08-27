import React, { useState, useEffect } from "react";
import getUserRepo from "../../api/getUserRepo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserCard.module.scss";
import { setCurrentUser } from "../../store/users/actions";

const UserCard = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();
  const [userRepo, setUserRepo] = useState(null);

  useEffect(() => {
    getUserRepo(user.repos_url).then((response) => {
      console.log(response);
      setUserRepo(response);
    });
  }, [user.repos_url]);

  const handleClick = () => {
    dispatch(setCurrentUser(user));
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
      <div className={styles.repo}>
        Repo: {userRepo ? userRepo.length : "..."}
      </div>
    </Link>
  );
};

export default UserCard;
