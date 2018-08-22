'use strict';
const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/browser/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
    },
    mode: 'production',
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.s[a|c]ss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ],
    },
    plugins: [
        new LiveReloadPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            APP_ID: JSON.stringify(process.env.APP_ID),
            API_KEY: JSON.stringify(process.env.API_KEY),
        })
    ],
    resolve: {
        extensions: ['.js']
    },
}
