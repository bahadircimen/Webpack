const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
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
                    'style-loader',
                    "css-loader",
                ]
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    output: {
        filename: "bundle.js"
    }
};