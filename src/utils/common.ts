import { UserModelStatus, UserModelType } from "../API/models/user.model";

export type Version = 1 | 2 | 3;

export const versionSwitch = (version: Version, ...components: any[]) => {
  return components[version - 1];
};

export const isUserActive = (status: UserModelStatus) =>
  !!(status && status === UserModelStatus.ACTIVE);

export const isAdmin = (type: UserModelType) =>
  !!(type && type === UserModelType.ADMIN);
