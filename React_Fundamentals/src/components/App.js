import React from 'react';
//var React = require('react');
import Contact from './contact'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            flag: false
        }
    }
    render(){
        return(
            <div>
                <h1>Hello React Skeleton</h1>
                <p>{this.state.name}</p>
                <button
                onClick={()=>{
                    if(this.state.flag){
                        this.setState({
                            name: "Wow",
                            flag: false
                        })
                    }else{
                        this.setState({
                            name: "lol",
                            flag: true
                        })
                    }
                }}>Click</button>
                <hr></hr>
                <hr></hr>
                <hr></hr>

                <Contact></Contact>

            </div>
        );
    }
}

export default App;
//module.export = App;