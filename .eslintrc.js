module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    overrides: [
        {
            files: ["**/*.stories.*"],
            rules: {
                "import/no-anonymous-default-export": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "prefer-const": "warn",
        quotes: ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
    },
    ignorePatterns: [".eslintrc.js"],
};
