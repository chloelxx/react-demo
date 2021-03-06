var path = require('path')
var webpack = require('webpack')
    /*
    extract-text-webpack-plugin插件，
    有了它就可以将你的样式提取到单独的css文件里，
    妈妈再也不用担心样式会被打包到js文件里了。
     */
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置入口文件，有几个写几个
    entry: {
        //main: './src/js/page/main.js',
        app: './src/index.jsx',
    },
    output: {
        path: path.join(__dirname, './news_html'), // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '/news_html/', // 模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/common-[hash].js', // 每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js' // chunk生成的配置
    },
    module: {
        // 加载器，关于各个加载器的参数配置，可自行搜索之。
        rules: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015'],
                            compact: 'false',
                            plugins: ['syntax-dynamic-import']
                        }
                    }
                ]
            },{
                test: /\.css$/,
                // 配置css的抽取器、加载器。'-loader'可以省去
                //tips:webpack1.2版本在中引用css文件可以用loader: ExtractTextPlugin.extract('style-loader','css-loader')
                //但是在webapck中2.0版本中不能能用loader: ExtractTextPlugin.extract('style-loader','css-loader')要用
                //loader: ExtractTextPlugin.extract({fallback:'style-loader',use: 'css-loader'})
                loader: ExtractTextPlugin.extract({fallback:'style-loader',use: 'css-loader'})
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            },{
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
                // loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 20000,
                            name: '[name].[ext]'
                        }
                    }
                ]
                // loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "es2015",
                                "react"
                            ],
                            plugins: ['syntax-dynamic-import']
                        }
                    }
                ]
                // loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/common-[hash].css'), // 单独使用link标签加载css并设置路径，
        new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
            filename: './index.html', // 生成的html存放路径，相对于path
            template: './src/index.html', // html模板路径
            inject: 'body', // js插入的位置，true/'head'/'body'/false
            hash: false, // 为静态资源生成hash值
            chunks: ['app'],
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载需要用的对象方法，不能去掉
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: false,
            },
        })
    ],
   // 使用webpack-dev-server，提高开发效率
    devServer: {
     // contentBase: '/news_html/',
     host: 'localhost',
     port: 9090,
     inline: true,
     hot: true
    },
    devtool: '#eval-source-map',
}
if (process.env.NODE_ENV === 'production') {
	console.log("ttt")
    console.log('> Starting dev server...')
    console.log('> localhsot:9090')
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true,
            },
        }),
    ])
}