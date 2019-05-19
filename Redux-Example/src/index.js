import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import reducers from './reducers'; // 인덱스파일일 경우 추가 작성하지 않아도 된다.

// import * as actions from './actions';

import {Provider} from 'react-redux';

const store = createStore(reducers);

console.log(store.getState());
const unsubscribe = store.subscribe(()=> console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch({type: 'INCREMENT'});
// store.dispatch(actions.setColor([200,200,200]));

// unsubscribe();

// store.dispatch(actions.setColor([210,210,210]));

ReactDOM.render(<Provider store={store}>
                    <App store={store}/>
                </Provider>
                , document.getElementById('root'));