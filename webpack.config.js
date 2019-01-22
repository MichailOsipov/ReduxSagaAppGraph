const HtmlWebpackPlugin = require('html-webpack-plugin');

const host = 'localhost';
const devServerPort = 8000;
const proxyPort = 8088;

module.exports = {
    context: __dirname + '/src',
    entry: ['babel-polyfill', './main.jsx'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
        publicPath: ''
    },
    devtool: 'inline-source-map',
    devServer: {
        host,
        port: devServerPort,
        proxy: {
            '/api': {
                target: `http://${host}:${proxyPort}`,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2'],
                            plugins: ['transform-decorators-legacy']
                        }
                    }
                ]

            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]-[hash:base64:3]'
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })]
};
