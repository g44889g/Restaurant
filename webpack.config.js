const path = require("path");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        headers: {
            'Content-Security-Policy': "default-src 'self'; connect-src 'self' http://localhost:8080",
        },
        static: "./dist",
        open: true,
    },
};
