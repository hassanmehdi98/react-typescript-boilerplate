import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { RoutesMap } from "../../routes";

const Home: React.VFC = () => {
  const {
    state: { isAuthenticated },
    actions: { setIsAuthenticated },
  } = useContext(AuthContext);
  const history = useHistory();

  if (!isAuthenticated) history.replace(RoutesMap.LOGIN);

  return (
    <div>
      <h1>Home Component</h1>
      {isAuthenticated && (
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      )}
    </div>
  );
};

export default Home;
