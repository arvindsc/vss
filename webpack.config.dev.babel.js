import webpack from 'webpack';
import path from 'path';
var HtmlWebpackPlugin = require('html-webpack-plugin');

export default {

    entry: [
        'webpack-hot-middleware/client?reload=true',
        'babel-regenerator-runtime',
        path.resolve(__dirname, 'src/')
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // This will stop cache being invalidated in some scenarios
        new HtmlWebpackPlugin({template:'client/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                WEBPACK: true
            }
        }),

    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              exclude: /(node_modules)/
            }
        ]
    }
}