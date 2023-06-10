module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "warn",
    // "@typescript-eslint/await-thenable": "warn",
    // "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "await-thenable": "off",
    "require-await": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-empty": "off",
    "no-control-regex": "off",
    "prefer-const": "off",
    "no-constant-condition": "off",
    "no-fallthrough": "off",
    "no-async-promise-executor": "off",
    "no-case-declarations": "off",
  },
}
