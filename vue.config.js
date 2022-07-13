const { name } = require("./package.json");
const { defineConfig } = require("@vue/cli-service");

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullTailwindCssConfig = resolveConfig(tailwindConfig);

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // pwa
  pwa: {
    name,
    themeColor: fullTailwindCssConfig.theme.colors["primary"],
    msTileColor: fullTailwindCssConfig.theme.colors["primary"],
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle:
      fullTailwindCssConfig.theme.colors["primary"],

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "dev/sw.js",
      // ...other Workbox options...
    },
  },
});
