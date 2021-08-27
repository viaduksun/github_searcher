
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchPage from './Containers/SearchPage/SearchPage';
import UserPage from './Components/UserPage/UserPage';
import {
  BrowserRouter, Switch, Route, withRouter
} from 'react-router-dom';

function App() {
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
