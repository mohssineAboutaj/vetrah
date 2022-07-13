const { name } = require("./package.json");
const { defineConfig } = require("@vue/cli-service");

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const { theme } = resolveConfig(tailwindConfig);

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // pwa
  pwa: {
    name,
    themeColor: theme.colors["primary"],
    msTileColor: theme.colors["primary"],
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: theme.colors["primary"],
  },
});
