React Project 만들기 | NPM, WEBPACK

- Global Dependency 설치

$ sudo npm install -g webpack webpack-dev-server

1. webpack: 브라우저 위에서 import(require)를 할 수 있게 해주고
    자바스크립트 파일들을 하나로 합쳐줍니다.
2. webpack-dev-server: 별도의 서버를 구축하지 않고도 static 파일을
    다루는 웹서버를 열 수 있으며 hot-loader 를 통하여 코드가 수정 될 때마다
    자동으로 리로드 되게 할 수 있습니다.


- 프로젝트 생성

$ mkdir react-fundamentals
$ cd react-fundamentals
$ npm init
=> node Project를 시작하는 명령어
    package.json 


- Dependency 및 Plugin 설치

React 설치

$ npm install --save react react-dom
=> --save 는 package.json 에 Dependencies 목록에 추가

개발 의존 모듈 설치

$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
$ npm install --save-dev react-hot-loader webpack webpack-dev-server
=> --save-dev 개발과정에서 필요한 패키지
    babel > 프로젝트에서 ES6 문법을 사용할 수 있게 해주는 모듈

- 개발서버 실행 스크립트

/package.json

"scripts":{
    "dev-server":"webpack-dev-server"
},

$ npm run dev-server