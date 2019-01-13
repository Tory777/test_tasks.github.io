const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'to_do_list': './src/to_do_list/index.js',
        'landing_page': './src/landing_page/index.js'
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: '[name]/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader'
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]/[name].css',
            allChunks: true
        })
    ]
};



