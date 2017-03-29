module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-unused-vars": 0,
        "linebreak-style": [
            "error",
            "windows"
        ],

        "no-unused-vars": [
            "error", { 
                "vars": "local", 
                "args": "after-used", 
                "ignoreRestSiblings": false 
            }]
    }
};
