const path = require("path");
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[fullhash].js',
        clean: true
    },
    plugins: [
        new HtmlPlugin({ template: './src/index.html'}),
        new CssPlugin({ filename: 'styles[fullhash].css'}),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: 'static', to: 'static'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/,
                use: [
                    CssPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9991,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        devMiddleware: {
            writeToDisk: true
        }
    }
}

