module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
