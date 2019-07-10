var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/OrbitalTrackerPlugin',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "openmct-orbital-tracker.js",
        library: "OrbitalTrackerPlugin",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
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
    },
    resolve: {
        // alias: {
            // vue: "vue/dist/vue.min.js"
        // }
    },
    devtool: "source-map",
    plugins: [
        new UglifyJsPlugin({ sourceMap: true })
    ]
};