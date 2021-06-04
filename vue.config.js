module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/variables.scss";
          @import "@/styles/animations.scss";
        `
      }
    }
  }
}
