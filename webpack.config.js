const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = {
    entry: {
        'index': PATHS.source + '/index.js',
    },
    // output: {
    //     path: PATHS.build,
    //     filename: './js/[name].js'
    // },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: PATHS.source + '/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only'
    }
};

module.exports = function(env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return Object.assign(
            {},
            common,
            developmentConfig
        );
    }
};

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader"
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         })
//     ]
// };
