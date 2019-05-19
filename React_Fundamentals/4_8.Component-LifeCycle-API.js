LifeCycle API

|------------------컴포넌트 생성------------------|---------완료---------|
constructor -- > componentWillMount -- > render -- > componentDidMount
                                            
|--------prop 변화--------|----------------------업데이트 처리--------------------|-------완료---------|
componentWillReceiveProps-->shouldComponentUpdate-->componentWillUpdate-->render-->componentDidUpdate
                                    ^             |->false시 업데이트 취소  
|-----state 변화-----|              |
         |   |-----------------------바로 업데이트 실행

|---컴포넌트 제거---|
componentWillUnmount

1.componentWillMount // 렌더링 되기 전
2.componentDidMount // 렌더링이 된 다음
3.componentWillReceiveProps // 새로운 props를 받았을 때
4.shouldComponentUpdate // 컴포넌트가 update를 해야할지 말아야할지 정함
5.componentWillUpdate // 컴포넌트가 update되기 전에
6.componentDidUpdate // 컴포넌트가 update된 다음에
7.componentWillUnmount // 컴포넌트가 제거될 때

===============================================================================================

3. 자세히 알아보기
위 메소드들이 어떤 역할을 하는지 이름만 봐도 대충 유추 할 수 있지만.. 자세히 알아봅시다.

--------------------------------------------------
constructor
constructor(props){
    super(props);
    console.log("constructor");
}
생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.
이 메소드에서 기본 state 를 정할 수 있습니다.

--------------------------------------------------
componentWillMount
componentWillMount(){
    console.log("componentWillMount");
}
컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.
DOM 처리를 할 수 없다.

--------------------------------------------------
render()
컴포넌트 렌더링을 담당합니다.

--------------------------------------------------
componentDidMount
componentDidMount(){
    console.log("componentDidMount");
}
컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
이 안에서 다른 JavaScript 프레임워크를 연동하거나,
setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

--------------------------------------------------
componentWillReceiveProps
componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
}
컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.

--------------------------------------------------
shouldComponentUpdate
shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
}
prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
예: return nextProps.id !== this.props.id;
JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.

--------------------------------------------------
componentWillUpdate
componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
}
컴포넌트가 업데이트 되기 전에 실행됩니다.
이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.

--------------------------------------------------
componentDidUpdate
componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
}
컴포넌트가 리렌더링을 마친 후 실행됩니다.
여기서도 this.SVGElementInstanceList() 사용하지 말 것!!!

--------------------------------------------------
componentWillUnmount
componentWillUnmount(){
    console.log("componentWillUnmount");
}
컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.