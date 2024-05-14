// File: webpack.config.js

const path = require('path');

module.exports = {
    mode: 'development', // Set mode to 'development' or 'production'
    entry: './blocks/dmg-read-more-block.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'dmg-read-more-block.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
