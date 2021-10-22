import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import routes from "../../routes";

const Login: React.VFC = () => {
  const {
    state: { isAuthenticated },
    actions: { setIsAuthenticated },
  } = useContext(AuthContext);
  const history = useHistory();

  if (isAuthenticated) history.replace(routes.MAIN.HOME);

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={() => setIsAuthenticated(true)}>Login</button>
    </div>
  );
};

export default Login;
