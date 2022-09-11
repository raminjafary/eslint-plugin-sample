module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
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
  plugins: ["async"],
};
