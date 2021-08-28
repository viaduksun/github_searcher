import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchPage from './Containers/SearchPage/SearchPage';
import UserPage from './Containers/UserPage/UserPage';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import { setTotalCount, setUsersAction } from './store/users/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const usersLocal = localStorage.getItem("users");
    if (usersLocal) {
      dispatch(setUsersAction(JSON.parse(usersLocal)));
      dispatch(setTotalCount(JSON.parse(usersLocal).length));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/userPage">
            <UserPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
