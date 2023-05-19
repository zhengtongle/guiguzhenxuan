module.exports = {
    "env": {
        "browser": true, "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:@typescript-eslint/recommended"],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest", "sourceType": "module"
    },
    "plugins": ["vue", "@typescript-eslint"],
    "rules": {
        //
        "no-var": "error",// 禁止使用var
        "no-multiple-empty-lines": ["warn", {max: 1}], // 不允许使用多个空行
        "no-console": process.env.NODE_ENV == "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV == "production" ? "error" : "off",
        "no-unexpected-multiline":"error" //禁止多余的空行
    }
}
