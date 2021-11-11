export const TOKEN_KEY = "TOKEN";

export type ApiMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type APIError = {
  message: string;
  // Only if 400 error
  error?: {
    [field: string]: string;
  };
};

export type Response<T> = {
  status: number;
  data: T | null;
  error?: APIError;
};
