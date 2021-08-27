import React, { useState, useEffect } from "react";
import styles from "./SearchField.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { debounce } from "lodash";
import getUsers from "../../api/getUsers";
import UserCard from "../UserCard/UserCard";
import getUserRepo from "../../api/getUserRepo";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "97%",
    },
  },
}));

const SearchField = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [totalCount, setTotalCount] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(name).then((response) => {
      console.log(response);
      if (response) {
        setTotalCount(response.data.total_count);
        setUsers(response.data.items);
      }
    });
  }, [name]);

  const handleChange = debounce((event) => {
    setName(event.target.value);
    console.log(event.target.value);
  }, 2000);

  return (
    <div className={styles.SearchField}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Search for Users"
          variant="outlined"
          onChange={(event) => {
            handleChange(event);
          }}
          // value={name}
        />
      </form>
      <div className={styles.results}>
        <div className={styles.header}>
          Total count: <span>{totalCount}</span>
        </div>
        <div className={styles.content}>
          {users.map((user) => {
            // const repositories = await getUserRepo(user.repos_url);
            // console.log(repositories);
            return <UserCard user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchField;
