const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: './src/script.js',
    output: {
        path: __dirname + '/public',
        filename: 'build.js'
    },
    // Entry 설정은 항상 프로젝트 디렉토리 내부이기 때문에 상대 경로로 하는 반면에, 
    // Output 설정은 항상 프로젝트 디렉토리 내부라는 보장이 없으므로 절대 경로로 한는 점에 주의 바랍니다.
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new webpack.ProgressPlugin()
    ],
    //devtool: 'inline-source-map',
    devServer: {
        hot: true,
        host: '127.0.0.1',
        port: 4000,
        contentBase: __dirname + '/public'
    }
};