import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    prettierConfig,
    {
        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off", // Obviously don't do this in real code.
        },
        plugins: { prettier },
    },
];
