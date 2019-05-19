import * as types from '../actions/ActionTypes';

const initialState ={
    color: [255, 255, 255]
};

export default function ui(prevState, action){
    if(typeof prevState === 'undefined') prevState = initialState;
    if(action.type === types.SET_COLOR){
        return {
            ...prevState,
            color: action.color
        };
    }else{
        return prevState;
    }
}