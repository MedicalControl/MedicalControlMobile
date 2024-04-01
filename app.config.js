import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ApiUri: process.env.ApiUri,
  },
});