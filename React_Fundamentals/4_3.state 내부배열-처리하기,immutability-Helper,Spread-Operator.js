state 내부 배열 처리

concat 사용하기 or immutable.js

npm install --save react-addons-update
import update from 'react-addons-update';
import { setConfig } from 'react-hot-loader';

this.setState({
    list: update(
        this.state.list,
        {
            $push: [newObj, newObj2]
        }
    )
})
=> mongoDB에서 영감얻은 sysntax

this.setState({
    list: update(
        this.state.list,
        {
            $splice: [[index,1]]
        }
    )
})

==============주의점=================
let array = [0,1,2,3,4,5];

let changedArray = update(Array,{
    $splice: [[0,1],[1,1]]
});

function print(data){
    console.log(JSON.stringify(data, null, 2));
}

print(changedArray);
// 1, 3, 4, 5
====================================

this.setState({
    list: update(
        this.state.list,
        {
            [index]: {
                field: {$set: "value"},
                field2: {$set: "value2"}
            }
        }
    )
})

let object = {
    a: '1',
    b: '2',
    c: {
        d: '3',
        e: '4',
        f: {
            change_this_value: '0',
            this_stays_same: '6'
        }
    }
}

let changed = update(object, {
                        c: {
                            f: {
                                change_this_value: {
                                    $set: '5'
                                }
                            }
                        }
                    });

let changed = {
    ...object,
    c: {
        ...object.c,
        f: {
            ...object.c.f,
            change_this_value: '5'
        }
    }
}

let array = [0,1,2,3,4,5,6];
let changed = [ ...array, 7]; // 1,2,3,4,5,6,7

let changed = [ ...array.slice(0,2), ...array.slice(3,array.length-1)]
=> splice 는 원본을 변경 / slice 는 새로운 객체를 반환

Spread Operator
npm install --save babel-preset-stage-0

webpack.setConfig.js
module:{
    loaders: [
        {
          loaders: [
              presets: ['stage-0']
          ]   
        }
    ]
}