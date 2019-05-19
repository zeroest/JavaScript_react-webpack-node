import React, {Component} from 'react';
import './App.css';
import Nav from './components/toc';
import Header from './components/Test';
// import Article from './components/arti';
import sty1 from './components/sty1.css';
import Controller from './components/controller'
import Content from './components/content'

class App extends Component {
    constructor(){
        super();
        this.max_id = 3;
        this.state = {
            mode:'welcome',
            selected_item: null,
            subject:{title:'React_Basic_CRUD', sub:'My First Ract CRUD'},
            tocs:[
                {id:1, title:"html+", desc:"hyper text ~"},
                {id:2, title:"css", desc:"style ~"},
                {id:3, title:"javascript", desc:"script ~"}
            ],
        } //state
    }

    render() {
        //console.log("render", this)
        //console.log("App render");

        // let _title, _desc ; 

        // if(this.state.mode === 'welcome'){
        //     _title = this.state.Welcome.title;
        //     _desc = this.state.Welcome.desc;
        // }else if(this.state.mode === 'read'){
        //     _title = this.state.tocs[0].title;
        //     _desc = this.state.tocs[0].desc;
        // }

        return (
            <div className = "App" >
                <Header style={sty1}
                title={this.state.subject.title} 
                sub={this.state.subject.sub}
                onChangePage={function(e){
                    this.setState({
                        mode:'welcome',
                        selected_item: null
                    })
                    // if(this.state.mode === "welcome"){
                    //     //this.state.mode = "read";
                    //     //state 가 변경되도 render 함수가 호출되어야 하는데 그렇지 못한다.
                    //     this.setState({
                    //         selected_item: parseInt("1"),
                    //         mode: "read"
                    //     });
                    // }else{
                    //     this.setState({
                    //         mode: "welcome",
                    //         selected_item: null
                    //     });
                    // }
                    //this.setState({selected_item: ''})
                }.bind(this)}
                myFunction={()=>{
                    alert("hi React")
                }}></Header>
                {/* <Header title="React" sub="For UI"></Header> */}
                <br/>
                {/* <Nav test1="this is test1" test2="this test2"></Nav> */}
                =====================================================
                <Nav data={this.state.tocs}
                fncChange={(id)=>{
                    this.setState({
                        selected_item : Number(id),
                        mode : 'read'
                    })
                }}></Nav>
                =====================================================

                <Controller
                chMode={function(mod){
                    if(mod === 'delete'){
                        if(!window.confirm("정말 삭제하시겠습니까?")){
                            return;
                        }else{
                            let ts = this.state.tocs;
                            let _new = Array.from(ts);
                            
                            const itemToFind = _new.find(function(item) {
                                return item.id === this.state.selected_item;
                            }.bind(this)) 
                            //console.log(itemToFind)
                            const idx = _new.indexOf(itemToFind) ;
                            //console.log(idx)
                            if (idx > -1) _new.splice(idx, 1);
                            
                            this.setState({
                                tocs : _new
                            })
                            alert('success delete')
                        }
                    }else{
                        this.setState({
                            mode: mod
                        });
                    }
                }.bind(this)}></Controller>

                {/* <Article 
                title={_title}
                desc={_desc}></Article> */}

                <Content
                mode={this.state.mode}
                tocs={this.state.tocs}
                item={this.state.selected_item}
                onCreate={(_title, _desc, _id)=>{
                    let ts = this.state.tocs;
                    let _contents = Array.from(ts);

                    let result_id;
                    
                    if(this.state.mode === 'update'){
                        // console.log(_id-1);
                        // _contents[_id-1].title = _title;
                        // _contents[_id-1].desc = _desc;

                        const itemToFind = _contents.find(function(item){
                            return item.id === _id;
                        })
                        const idx = _contents.indexOf(itemToFind);
                        _contents[idx].title = _title;
                        _contents[idx].desc = _desc;

                        result_id = _id;

                    }else{
                        this.max_id++;
                        _contents.push({
                            id: this.max_id , title: _title, desc: _desc
                        });
                        result_id = this.max_id;
                    }

                    // let _contents = ts.concat({
                    //     id: cnt , title: _title, desc: _desc
                    // })


                    this.setState({
                        tocs : _contents,
                        mode: 'read',
                        selected_item: result_id
                    })
                    // 퍼포먼스 향상을 위해 state에 push() 하지말고 concat을 사용해 원본 state를 유지하고
                    // 새로운 객체를 만들어서 setState() 하자!!!!!!
                    // sholdComponentUpdate(newProps, newState); 사용시 newProps.data === this.props.data 조건 사용 문제로 복사본 사용

                    // Array.from();
                    // Object.assign();
                    // var a = {name: 'egoing'}
                    // var b = Object.assign({}, a);
                    // a === b => false
                    
                    // immutable.js

                }}></Content>

                {/* <testElem>
                    <a href="/" onClick={function(e){
                        
                        e.preventDefault();

                        if(this.state.mode === "welcome"){
                            //this.state.mode = "read";
                            //state 가 변경되도 render 함수가 호출되어야 하는데 그렇지 못한다.
                            this.setState({
                                mode: "read"
                            });
                        }else{
                            this.setState({
                                mode: "welcome"
                            });
                        }
                        modeClk();
                    }.bind(this)}>change Button</a>
                    
                </testElem> */}
                {/* bind 하지 않으면 this > undefind 된다 */}
            </div>
        );
    } //render end
}

export default App;

/** 
 * var bindTest = function(){
 *     console.log(this.name);
 * }
 * 
 * bindTest() => 결과 없음
 * 
 * var obj = { name : "React"};
 * 
 * var bindTest2 = bindTest.bind(obj);
 * 
 * bindTest2() => React
 * 
*/
