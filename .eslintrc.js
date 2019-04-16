module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    globals: {
        Finder: true,
        utools: true
    },
    plugins: [
        'vue',
        'html'
    ],
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}