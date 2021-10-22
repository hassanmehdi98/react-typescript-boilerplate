export type State = {
  isAuthenticated: boolean;
};

export type Actions = {
  setIsAuthenticated: (authenticated: boolean) => void;
};

export type Action = {
  type: string;
  payload?: Record<string, any>;
};
