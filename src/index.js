module.exports.rules = {
  "async-func-name": require("./rules/async-func-name.js"),
  "func-prefix-naming": require("./rules/func-prefix-naming"),
  "no-require": require("./rules/no-require"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "async/async-func-name": "warn",
      "async/func-prefix-naming": [
        1,
        {
          include: ["to"],
          exclude: ["excludeSomeFunction"],
        },
      ],
      "async/no-require": "error",
    },
  },
};
