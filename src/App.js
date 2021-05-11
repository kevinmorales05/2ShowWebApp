
import './App.css';
import MenuPrincipal from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MyProfile from './pages/MyProfile';
import Shows from './pages/Shows';
import Main from './pages/Main';
import SingIn from './pages/SingIn';
import FAQ from './pages/FAQ';


function App() {
  return (
    <Router>
    <div className="App">
      <MenuPrincipal />
    </div>

    <Switch>
          <Route path="/singin">
           <SingIn />
          </Route>
          <Route path="/shows">
           <Shows />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
           <Main />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
