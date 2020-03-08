module.exports = {
  presets: ["@vue/app"],
  plugins: ["vue-jsx-sync", "jsx-v-model", [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]
};