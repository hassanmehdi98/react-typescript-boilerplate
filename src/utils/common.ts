export type Version = 1 | 2 | 3;

export const versionSwitch = (version: Version, ...components: any[]) => {
  return components[version - 1];
};
