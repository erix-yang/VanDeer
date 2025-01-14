// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'not dead', '> 0.2%']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }],
    ['taro', {
      framework: 'react',
      ts: false
    }]
  ]
}
