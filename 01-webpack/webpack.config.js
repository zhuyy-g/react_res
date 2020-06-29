const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'), //源文件
    filename: 'index.html' //生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象 webpack基于node构建 webpack支持所有Node API 和语法
module.exports = {
    // development production
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: { //所有第三方模块的配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //打包处理css样式表的第三方loader  modules参数表示为普通的css样式表 启用模块化
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, //打包处理 字体文件的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] } // 打包处理scss文件的loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //表示这几个文件的后缀名 可以省略不写
        alias: {
            '@':path.join(__dirname, './src')
        }
    }
}

// 目前不能用下面的方式向外暴露内容 这是es6当中的语法 webpack并不支持 与之对应的是 import ** from ***
// export default {}