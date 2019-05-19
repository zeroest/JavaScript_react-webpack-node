state

- 유동적인 데이터
- JSX 내부에 {this.stat.stateName}
- 초기값 설정이 필수, 생성자(constructor) 에서
    this.state = {} 으로 설정
- 값을 수정 할 때에는 this.setState({...}), 렌더링 된 다음엔
    this.state = 절대 사용하지 말 것

