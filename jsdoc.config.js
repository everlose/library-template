export default {
  tags: {
    allowUnknownTags: true, // 允许未知的tag
  },
  source: {
    include: [
      //需要生成文档的文件夹列表
      'src',
    ],
    exclude: [
      //排除某些文件
      'src/index.js',
      'src/whale.js',
    ],
    includePattern: '.+\\.(js|es)$', //正则匹配的文件才会被生成文档
  },
  plugins: [
    'plugins/markdown', // markdown插件
  ],
  markdown: {
    // markdown配置
    tags: ['file'],
    excludeTags: ['author'],
    parser: 'gfm',
    hardwrap: true,
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    dateFormat: 'ddd MMM Do YYYY',
    outputSourceFiles: true,
    outputSourcePath: true,
    systemName: 'common文档', // 标题
    footer: '',
    copyright: 'https://docs.qianxiangbank.com',
    navType: 'inline',
    theme: 'cerulean', // 主题名，ink-docstrap提供的
    linenums: true,
    collapseSymbols: false,
    inverseNav: true,
    protocol: 'html://',
    methodHeadingReturns: false,
  },
  opts: {
    template: './node_modules/ink-docstrap/template', // 模板路径，ink-docstrap提供的
    destination: './docs/', //输出路径
    recurse: true, //是否递归
    debug: true,
    readme: 'README.md', //要转换的readme文件
  },
};
