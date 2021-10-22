type EnvironmentType = "DEV" | "MASTER";
type ConfigType = {
  ENVIRONMENTS: Record<EnvironmentType, any>;
};

const Config: ConfigType = {
  ENVIRONMENTS: {
    DEV: {
      API_URL: "https://dev.abc.com/v1",
    },
    MASTER: {
      API_URL: "https://abc.com/v1",
    },
  },
};

const ENVIRONMENT: EnvironmentType = "DEV";

export default Config.ENVIRONMENTS[ENVIRONMENT];
