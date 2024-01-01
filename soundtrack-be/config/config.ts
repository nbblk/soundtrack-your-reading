interface IConfig {
  port: number | string;
}

export const config: IConfig = {
  port: process.env.PORT || 8000,
};
