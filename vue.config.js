module.exports = {
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'Client Portal Web API Documentation',
      },
    },
    publicPath: process.env.NODE_ENV === "production" ? "/cp-web-api-docs/" : ""
  }