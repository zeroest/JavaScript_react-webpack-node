var webpack = require('webpack');
//import webpack from "webpack";

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'], // entry 부터 require 재귀적으로 불러온다. 배열로 여러파일 가능

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: { // 개발서버 설정
        hot: true, //수정될때마다 리로딩
        inline: true, // hot reloading에서 필요한 webpack dev server인 클라이언트를 bundle에 같이 넣어주는 것
        host: '0.0.0.0', // 서버를 liten 할 주소
        port: 4000, // 개발서버 포트
        contentBase: __dirname + '/public/', // index 파일의 위치 > output의 path
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'], // es6와 jsx 를 일반 자바스크립트 형식으로 변환
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ] // 자동으로 리로딩해주는 핫모듈리로드도 플러그인을 통해서 한다.
}
