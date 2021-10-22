import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authentication/AuthContext";

import routes from "./routes";
import Home from "./views/home";
import Login from "./views/login";

const App: React.VFC = () => {
  return (
    <AuthContextProvider>
      <Switch>
        <Route exact path={routes.AUTHENTICATION.LOGIN} component={Login} />
        <Route path={routes.MAIN.HOME} component={Home} />
      </Switch>
    </AuthContextProvider>
  );
};

export default App;
