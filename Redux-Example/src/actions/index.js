//import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';
// 디폴트 값이 없는 경우 위와같이 괄호안에 import 해준다
import * as types from './ActionTypes';
// types.SET_COLOR
//camelCase

export function increment(){
    return {
        type: types.INCREMENT
    }
}

export function decrement(){
    return {
        type: types.DECREMENT
    }
}

export function setColor(color){
    return {
        type: types.SET_COLOR,
        color
    }
}
// 액션 생성자 함수