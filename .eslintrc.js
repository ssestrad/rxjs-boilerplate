module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "webpack.config.js"
        }
      }
    },
    "parser": "babel-eslint"
};