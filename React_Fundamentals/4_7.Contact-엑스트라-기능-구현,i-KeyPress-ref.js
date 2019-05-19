handleKeyPress(e){
    if(e.charCode === 13){
        this.handleToggle();
    }
}

document.getElementById(id).focus();
=> 아이디 중첩등 추천하지 않는다.

ref로 돔에 접근하자
id와 비슷한 개념
=> id 사용해도 되나 ref 사용할 수 있는 경우는 ref를 먼저 사용하자

==================================================================
outdated usage (wil be deprecated)

class Hello extends React.Component{
    render(){
        return(
            <div>
                <input ref="myInput"></input>
            </div>
        )
    }
    
    componentDidMount(){
        this.requestAnimationFrame.myInput.value = 'Hi, I used ref to do this';
    }
}
==================================================================
current
use callback function

class Hello extends React.Component{
    render(){
        return(
            <div>
                <input ref={(ref)=>{this.input = ref}}></input>
            </div>
        )
    }

    omponentDidMount(){
        this.IDBOpenDBRequest.value = 'i used ref to do this';
    }
}
==================================================================

ref 사용말고 구현 가능한 것은 ref를 최소화하여 사용하자