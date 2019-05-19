arr.sort([compareFunction]);

var fruit = ['cherries', 'apples', 'bananas']
fruit.sort(); // apples, bananas, cherries

var scores = [1, 10, 2, 21];
scores.sort(); // 1, 10, 2, 21

기본적으로 Unicode 를 비교하여 sort 하기 때문에 
compareFunction 정의를 해주지 않으면 Unicode를 기준으로 sort한다

숫자 비교시

=======================================
function compare(a,b){
    if(a is less than b by some ordering criterion){
        return -1;
    }
    if(a is greater than b by the ordering criterion){
        return 1;
    }
    // a must be equal to b
    return 0;
}
========================================

function compareNumbers(a,b){
    return a - b;
} // 오름차순

function compareNumbers(a,b){
    return (a - b) * -1;
} // 내림차순

scores.sort(compareNumbers); // 1, 2, 10, 21



---------------------------------------------------------------------------------
---------------------------------------------------------------------------------


var new_array = arr.filter(callback[, thisArg]);

===============================================
function isBigEnough(value){
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered = [12, 130, 44]
===============================================

cf) 컴포넌트에 event 적용안됨
    native DOME, 