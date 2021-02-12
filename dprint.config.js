// @ts-check
const { TypeScriptPlugin } = require("dprint-plugin-typescript");
const { JsoncPlugin } = require("dprint-plugin-jsonc");

/** @type { import("dprint").Configuration } */
module.exports.config = {
    projectType: "openSource",
    plugins: [
        new TypeScriptPlugin({
            useTabs: false,
            // many more
        }),
        new JsoncPlugin({
            indentWidth: 2,
        }),
    ],
    includes: [
        "**/*.{ts,tsx,json,js,jsx}",
    ],
};
