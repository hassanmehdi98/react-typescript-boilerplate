export enum UserModelType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum UserModelStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

export type UserModel = {
  Id: number;
  FirstName: string;
  LastName?: string;
  Type: UserModelType;
  Status: UserModelStatus;
  Email: string;
  CreatedAt: string;
};
