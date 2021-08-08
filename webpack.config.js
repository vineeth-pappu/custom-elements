const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "./node_modules/@webcomponents/webcomponentsjs/*.js*",
                    to: "vendor/webcomponents/[name][ext]" 
                },
            ],
          }),
      
    ]
}