import React, { Dispatch } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import { Action, Actions, State } from "./types";

const initialState: State = {
  isAuthenticated: false,
};

const initialActions: Actions = {
  setIsAuthenticated: (authenticated: boolean) => {},
};

const AuthContext = React.createContext({
  state: initialState,
  actions: initialActions,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setIsAuthenticated":
      return {
        ...state,
        isAuthenticated: action.payload?.authenticated,
      };
    default:
      return state;
  }
};

const defineActions = (dispatch: Dispatch<Action>) => {
  return {
    setIsAuthenticated: (authenticated: boolean) => {
      dispatch({ type: "setIsAuthenticated", payload: { authenticated } });
    },
  };
};

const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useMemo(() => defineActions(dispatch), [dispatch]);

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthenContextConsumer = AuthContext.Consumer;

export { AuthContextProvider, AuthContext, AuthenContextConsumer };
