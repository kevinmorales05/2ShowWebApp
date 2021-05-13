import { Switch, Route } from "react-router-dom";

import MyProfile from "../pages/MyProfile";
import Shows from "../pages/Shows";
import Main from "../pages/Main";
import SingIn from "../pages/SingIn";
import FAQ from "../pages/FAQ";
import MyEvents from '../pages/MyEvents'

function Routes() {
  return (
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
      <Route path="/myevents">
        <MyEvents />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default Routes;
