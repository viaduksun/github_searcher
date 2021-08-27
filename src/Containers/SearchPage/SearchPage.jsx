import React from "react";
import SearchField from "../../Components/SearchField/SearchField";
import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
      <div className="container">
        <SearchField />
      </div>
    </div>
  );
};

export default SearchPage;
