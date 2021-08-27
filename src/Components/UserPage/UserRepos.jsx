import React, { useState, useEffect } from "react";
import styles from "./UserPage.module.scss";
import UserRepoItem from "./UserRepoItem";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "97%",
    },
  },
}));

const UserRepos = ({ userRepo }) => {
  // console.log(userRepo);
  const classes = useStyles();
  // const currentUserRepo = useSelector((state) => state.currentUserRepo);
  const [query, setQuery] = useState("");
  const [serchedRepos, setSerchedRepos] = useState(userRepo);

  // console.log(currentUserRepo);

  useEffect(() => {
    setSerchedRepos(userRepo);
  }, [userRepo]);

  const handleChange = debounce((event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
    const searchToLowerCase = event.target.value.toLowerCase();
    const searchRegExp = new RegExp(searchToLowerCase);
    const filteredRepos = userRepo.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.match(searchRegExp);
    });
    if (event.target.value) {
      setSerchedRepos(filteredRepos);
    } else {
      setSerchedRepos(userRepo);
    }
    console.log(filteredRepos);
  }, 500);

  return (
    <div>
      <div className={styles.searchField}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search for repositories"
            variant="outlined"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </form>
      </div>
      <div className={styles.repoField}>
        {serchedRepos.length > 0 &&
          serchedRepos.map((repo) => (
            <UserRepoItem repo={repo} index={repo.id} />
          ))}
        {!serchedRepos.length && (
          <p className={styles.noResults}>No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default UserRepos;
