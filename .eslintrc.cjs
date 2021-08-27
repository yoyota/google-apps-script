module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:import/typescript"
  ],
  env: {
    node: true,
    jest: true
  },
  plugins: ["jest", "prettier", "promise"],
  rules: {
    "comma-dangle": ["error", "never"],
    "import/extensions": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "none"
      }
    ]
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    }
  ]
}
