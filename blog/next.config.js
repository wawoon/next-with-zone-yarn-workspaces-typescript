const assetPrefix = process.env.BUILDING_FOR_NOW ? "/blog" : "";

const withTM = require("next-transpile-modules")(["common"]);
const config = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
module.exports = withTM(config);
