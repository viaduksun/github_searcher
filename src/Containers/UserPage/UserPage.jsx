import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import getUserData from "../../api/getUserData";
import styles from "./UserPage.module.scss";
import UserRepos from "./UserRepos";
import getUserRepo from "../../api/getUserRepo";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const BackButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    textTransform: "none",
    backgroundColor: "#8595a6",
    "&:hover": {
      backgroundColor: "#6a798a",
    },
  },
}))(Button);

const UserPage = () => {
  const classes = useStyles();

  const currentUser = useSelector((state) => state.currentUser);
  const [userData, setUserData] = useState({});
  const [userRepo, setUserRepo] = useState([]);

  console.log("UserPage");
  useEffect(() => {
    getUserData(currentUser.url)
      .then((data) => {
        console.log(data);
        setUserData(data.data);
      })
      .catch((err) => {
        /* Do something with error, e.g. show error to user */
        console.log(err.response);
      });
    getUserRepo(currentUser.repos_url)
      .then((repos) => {
        console.log(repos);
        setUserRepo(repos.data);
      })
      .catch((err) => {
        /* Do something with error, e.g. show error to user */
        console.log(err.response);
      });
  }, [currentUser]);

  // function parseISOString(s) {
  //   const b = s.split(/\D+/);
  //   return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  // }
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className={styles.actions}>
          <Link to="/">
            <BackButton
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<ArrowBackIcon />}
            >
              Back to search page
            </BackButton>
          </Link>
        </div>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src={currentUser.avatar_url} alt={currentUser.login} />
          </div>
          <div className={styles.userData}>
            <div className={styles.dataItem}>
              <p className={styles.name}>User name:</p>
              <p className={styles.value}>{userData.name}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>User login:</p>
              <p className={styles.value}>{userData.login}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>Email:</p>
              <p className={styles.value}>{userData.email}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>Location:</p>
              <p className={styles.value}>{userData.location}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>Join date:</p>
              <p className={styles.value}>{userData.created_at}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>Folowers:</p>
              <p className={styles.value}>{userData.followers}</p>
            </div>
            <div className={styles.dataItem}>
              <p className={styles.name}>Folowing:</p>
              <p className={styles.value}>{userData.following}</p>
            </div>
          </div>
        </div>
        <UserRepos userRepo={userRepo} />
      </div>
    </div>
  );
};

export default UserPage;
