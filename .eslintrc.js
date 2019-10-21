// eslint官网: https://eslint.bootcss.com/docs/user-guide/configuring/
module.exports = {
  env: {
    //环境
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: 'eslint:recommended', // 官方推荐的校验配置
  globals: {
    // 预设一些全局变量，eslint校验这些
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // 规则
    /* 风格 */
    indent: [0, 2], // 4个空格缩进
    semi: [1, 'always'], // 结尾使用分号
  },
};
