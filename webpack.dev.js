const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // prefer 'dart-sass'
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: './dist',
    },
})
