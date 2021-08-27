import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./UserPage.module.scss";

const UserPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  console.log("UserPage");
  return (
    <div className="page_wrapper">
      <div className="container">
        <Link to="/">
          <h1>Back to search</h1>
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
