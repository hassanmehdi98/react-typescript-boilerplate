import React from "react";

export enum RouteRoles {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export type Route = {
  path: string;
  Component: React.ComponentType<{ __roles: RouteRoles[] | undefined }>;
  roles?: RouteRoles[];
  exact?: boolean;
};

export type Routes = Route[];
