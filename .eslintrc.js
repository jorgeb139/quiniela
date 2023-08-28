const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "next",
    "prettier",
    "plugin:prettier/recommended" 
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
    "@typescript-eslint/no-unused-vars": [RULES.ERROR, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": RULES.OFF,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
        "tabWidth": 2,
        "trailingComma": "none",
        "jsxSingleQuote": true
      }
    ]
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
