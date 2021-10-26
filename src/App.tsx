import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authentication/AuthContext";
import { ROUTES } from "./routes";

const App: React.VFC = () => {
  return (
    <AuthContextProvider>
      <Switch>
        {ROUTES.map(({ path, Component, roles, exact = false }) => (
          <Route path={path} exact={exact}>
            <Component __roles={roles} />
          </Route>
        ))}
      </Switch>
    </AuthContextProvider>
  );
};

export default App;
