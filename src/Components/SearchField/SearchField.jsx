import React, { useState, useEffect } from "react";
import styles from "./SearchField.module.scss";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import { debounce } from "lodash";
import getUsers from "../../api/getUsers";
import UserCard from "../UserCard/UserCard";
import { useDispatch } from "react-redux";
import { setUsersAction } from "../../store/users/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "97%",
      flex: "1 1 auto",
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#799aba",
    },
    "& label.Mui-focused": {
      color: "#265f99",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        backgroundColor: "#d8e1e3",
        borderColor: "#5d7185",
        border: "2px solid",
      },
      "&:hover fieldset": {
        borderColor: "#445463",
      },
      "&:placeholder fieldset": {
        color: "#5a7ea3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2d5173",
      },
    },
    "& .MuiOutlinedInput-input": {
      zIndex: 10,
    },
  },
})(TextField);

const SearchField = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [name, setName] = useState("");
  const [totalCount, setTotalCount] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const usersLocal = localStorage.getItem("users");
    const totalLocal = localStorage.getItem("total");
    if (!name) {
      setUsers(JSON.parse(usersLocal));
      setTotalCount(totalLocal);
    }
    if (name) {
      getUsers(name)
        .then((response) => {
          console.log(response);
          if (response) {
            setTotalCount(response.data.total_count);
            setUsers(response.data.items);
            localStorage.setItem("users", JSON.stringify(response.data.items));
            localStorage.setItem("total", response.data.total_count);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [name]);

  const handleChange = debounce((event) => {
    setName(event.target.value);
    console.log(event.target.value);
  }, 1000);

  const handleRefresh = () => {
    console.log("handleRefresh");
    localStorage.removeItem("users");
    localStorage.removeItem("total");
    setUsers([]);
    setTotalCount([]);
    dispatch(setUsersAction([]));
  };

  return (
    <div className={styles.SearchField}>
      <div className={styles.searchForm}>
        <div className={styles.searchInputWrapper}>
          <form className={classes.root} noValidate autoComplete="off">
            <CssTextField
              id="outlined-basic"
              label="Search for Users"
              variant="outlined"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </form>
        </div>
        <div className={styles.refresh}>
          <IconButton aria-label="delete" onClick={handleRefresh}>
            <RefreshIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      <div className={styles.results}>
        {users && (
          <div className={styles.header}>
            Total count: <span>{totalCount}</span>
          </div>
        )}
        <div className={styles.content}>
          {users &&
            users.map((user) => {
              return <UserCard user={user} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchField;
