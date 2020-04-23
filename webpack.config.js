const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        // historyApiFallback: true,
        port:8090
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {loader:"style-loader"},
                    {loader:"css-loader",
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                            localsConvention: 'camelCase',

                        }
                    }
                ]
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    {loader:"style-loader"},
                    {loader:"css-loader",
                        options: {
                        modules: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                            localsConvention: 'camelCase',

                        }
                    },
                    {loader:"sass-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            fallback: "file-loader",
                        },
                    },
                ],
            },
        ]
    },
    output: {
        filename: "bundle.js"
    }
};