localStorage
=> html5 부터 지원이 되는 데이터 저장공간
    쿠키와 비슷함 (쿠키는 도메인당 4kb가 최고 용량)
    localStorage는 2.5mb ~ 5mb 까지 저장가능
    브라우저마다 다름
    localStorage는 서버로 전송되지 않는다.html5


if(typeof(Storage) !== "undefined"){
    // Code for localStorage / sessionStorage
}else{
    // Sorry! No Web Storage support...
}
// Store
localStorage.setItem("lastname", "smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// Store
localStorage.lastname = "Smith";
// Retrieve
document.getElementById("result").innerHTML = localStorage.lastname;

localStorage.removeItem("lastname");


let object = { text: 'codelab'};
localStorage.state = object;

localStorage.state
// "[object Object]"
=> localStorage는 text type으로만 저장이 가능하다!!!

객체형으로 바로 넣을 수 없고
JSON.stringify() 사용하자!!!

localStorage.state = JSON.stringify(object);
localStorage.state
// "{"text": "codelab"}"

JSON.parse(localStorage.state);
// Object {text: "codelab"}

localStorage.clear();
//저장소 초기화
