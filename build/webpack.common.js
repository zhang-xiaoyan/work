const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =(env)=>{
    return {
        mode: 'development',
        entry: {
            app: './app.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html'
            }),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {

                }
            ]
        },
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            port: 8080,
            publicPath: '/'
        }
    }
}