export const TOKEN_KEY = "TOKEN";

export type ApiMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type Response = {
  status: number;
  data: Record<string, any> | null;
};
