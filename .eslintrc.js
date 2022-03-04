
module.exports = {
    "extends": [
        "airbnb-base",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "document": "readonly",
    },
    "rules": {
        "linebreak-style": "off",
        "semi": "off",
        "global-require": "off",
        "no-console": process.env.NODE_ENV === 'production' ? 1 : 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "react/jsx-uses-react": 2,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "react/prop-types": 1
    },
    // overrides: [
    //     {
    //         files: ['*.ts'],
    //         parser: '@typescript-eslint/parser',
    //         plugins: ['@typescript-eslint'],
    //         extends: ['plugin:@typescript-eslint/recommended'],
    //     },
    // ]
}