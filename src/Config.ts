type EnvironmentType = "DEV" | "MASTER" | "LOCAL";
type ConfigType = {
  ENVIRONMENTS: Record<EnvironmentType, Record<string, any>>;
};

const Config: ConfigType = {
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: "http://localhost:3001/v1",
    },
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
