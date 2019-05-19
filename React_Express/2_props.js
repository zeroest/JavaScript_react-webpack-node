props

- 컴포넌트 내부의 Immutable Data
- JSX 내부에 {this.props.propsName}
- 컴포넌트를 사용 할 때, <>괄호 안에 propsName="value"
- this.props.children 은 기본적으로 갖고있는 props로서,
    <Cpnt>여기에 있는 값이 들어간다.</Cpnt>

기본 값 설정 Component.defaultProps = {...}

class App extends Ract.Component{
    render(){
        return(
            <div>
            {this.props.value}
            {this.props.secondValue}
            {this.props.thirdValue}
            <div>
        );
    }
};

App.defaultProps = {
    value: 0
}

App.propTypes = {
    value: React.PropTypes.string,
    secondValue: React.PropTypes.number,
    thirdValue: React.PropTypes.any.isRequired
}

Type 검증 Component.propsTypes = {...}

=====================================
React v15.5부터 React.PropTypes 는 별도 패키지로 옮겨졌습니다. 
대신 prop-types 라이브러리를 사용하시길 바랍니다.
=====================================


import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

    isRequired 마찬가지
=> 타입이 일치하지 않아도 컴파일 오류는 발생하지 않는다
    하지만 콘솔에 type error 메세지가 나타나게 되어있다.
    [prop에 유효하지않은 값이 전달되면 자바스크립트 콘솔에 경고가 노출됩니다. 
    성능상의 이유로 propTypes 는 개발 모드에서만 체크합니다.]
react.min 버전의 경우 콘솔 에러를 발생시키지 않기 때문에 full 버전을 import 해준다.