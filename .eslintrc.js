module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'prettier'], //使用推荐的React代码检测规范
    env: {
        browser: true,
        node: true,
    },
    //自动发现React的版本，从而进行规范react代码
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        // 关闭any类型校验
        '@typescript-eslint/no-explicit-any': 'off',

        // 关闭空函数校验
        '@typescript-eslint/no-empty-function': 'off',

        // 关闭对 '@ts-ignore' 的校验
        '@typescript-eslint/ban-ts-comment': 'off',

        // 关闭偏爱使用const常量规则校验
        'prefer-const': 'off',

        // 关闭require引入校验
        '@typescript-eslint/no-var-requires': 'off',

        // 关闭双精度浮点数校验
        'eslint no-loss-of-precision': 'off',

        // 关闭非空断言的严格校验
        '@typescript-eslint/no-non-null-assertion': 'off'
    },
}
