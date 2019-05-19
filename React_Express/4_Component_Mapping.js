import { log } from "util";

Component Mapping

JavaScript - Map

map()
=> 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 처리해서
    그 결과로 새로운 배열을 생성합니다.

arr.map(callback, [thisArg])

callback            새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
    currentValue    현재 처리되고 있는 요소
    index           현재 처리되고 있는 요소의 index 값
    array           메소드가 불려진 배열
thisArg             (선택항목) callback 함수 내부에서 사용 할 this 값을 설정

ex)--------------------------------------------------------------------------
var numbers = [1,2,3,4,5];
var processed = numbers.map(function(num, idx, ar){
    //console.log(num, idx, ar);
    return num*num;
})

/* ES6 Syntax */

let numbers = [1,2,3,4,5];
let result = numbers.map((num)=>{
    return num * num;
})

arrow function
http://es6console.com/

==========================
let one = a => console.log(a);
--------------------------
var one = function one(a) {
    return console.log(a);
  };
==========================

let two = (a,b) => Console.log(a,b);

let three = (c,d) =>{
    console.log(c);
    console.log(d);
}

let four = () =>{
    console.log("no params");
}
-----------------------------------------------------------------------------


