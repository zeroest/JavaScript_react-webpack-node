
action

작업에 대한 정보를 지니고 있는 객체

// 액션은 하나의 객체

// {type: "INCREMENT"}
// {type: "DECREMENT"}
// {
//     type: "SET_COLOR",
//     color: [200,200,200]
// }

==========================================

Reducer

변화를 일으키는 함수
순수해야함

1. 비동기 작업 X
2. 인수 변경 X
3. 동일한 인수 = 동일한 결과

이전 상태와 액션을 받아서 다음 상태를 반환한다.
(previousState, action) => newState;
=> 이전 상태를 변경하는게 아님.
    그저 새로운 상태를 반환함!!!

기존 상태를 복사하고 변화를 준다음에 반환

==========================================

Store

어플리케이션의 현재상태를 지니고있음
Redux를 사용하는 application의 경우 하나의 Stroe를 가지고 있다

import {createStore} from 'react-redux';
import reducers from './reducers';
const store = createStore(reducers); // store 생성

store.dispatch(action) // action을 reducer로 보낸다
                        // 현재 state 와 action 을 전달
                        // action 에 따른 새로운 state를 생성해 갈아끼운다
getState() // 현재 state를 반환하는 메소드
subscribe(listener) // state가 바뀔 때마다 실행할 함수를 등록
                    // listener => 실행할 콜백 함수
replaceReducer(nextReducer) // 핫리로딩, 코드분할 사용 (거의 사용x)

==========================================

react-redux

view-layer-binding

1. Provider
컴포넌트에서 Redux를 사용하도록 서비스를 제공
Provider도 하나의 컴포넌트

import { createStore } from 'react-redux';
import reducers from './reducers';
const store = createStore(reducers);
<Provider store={store}>
    <App/>
</Provider>

2. connect([...options]);
컴포넌트를 Redux에 연결하는 함수를 반환합니다.
// 또다른 함수를 반환한다!!!

connect()(연결할 컴포넌트);
store에 연결 된 새로운 컴포넌트 클래스가 반환됨
옵션이 없으면 this.props.store로 접근 가능

connect(
    [mapStateToProps],
    [mapDispatchToProps],
    [mergeProps],
    [options] // {[pure = true],[withRef = false]}
)

pure true => 불필요한 업데이트하지 않는다.
withRef = false => true일시 = redux에 연결된 컴포넌트를 ref에 담아서
getWrappedInstance() 를 통하여 접근할 수 있게 해준다.