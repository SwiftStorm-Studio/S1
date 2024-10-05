module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:svelte/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: ['svelte', '@typescript-eslint'],
    ignorePatterns: ['node_modules'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte/svelte'
        }
    ],
    settings: {
        'svelte/typescript': true
    }
};