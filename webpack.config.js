const path = require('path');

module.exports = {
  mode: 'production', // 生产环境，压缩代码
  entry: ['./src/index.js'], //入口

  output: {
    library: 'oreo', // 库名字, 取名叫oreo(奥利奥), 可以直接调用，比如window.oreo
    libraryTarget: 'umd', // 输出library规范代码, umd是兼容amd和cmd的
    path: path.resolve(__dirname, './dist'), // 输出路径
    filename: 'oreo.js', // 文件名
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 使用babel-loader处理es代码
        },
      },
      {
        //前置(在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译)
        test: /.(js)$/,
        enforce: 'pre', // 在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: function() {
            return 'output';
          },
        },
      },
    ],
  },
};
