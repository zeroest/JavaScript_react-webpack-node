import React, {Component} from 'react';

class ReadContent extends Component{
    // shouldComponentUpdate(newProps, newState){
    //     if(this.props.item === newProps.item){
    //         return false;
    //     }
    //     return true;
    // }

    constructor(props){
        super(props);
        this.state={
            Welcome:{title:"WelCome!!!!!!!", desc:"Hello React World"}
        }
    }

    render(){
        console.log("readContent render")

        let i = 0;
        let data = this.props.tocs;
        let id = this.props.item;

        let _title, _desc;

        if(this.props.md === 'welcome'){
            _title = this.state.Welcome.title;
            _desc = this.state.Welcome.desc;
        }else{
            while(i < data.length){
                
                if(data[i].id === id){
                    _title = data[i].title;
                    _desc = data[i].desc;
                    break;
                }
    
                i++;
            }
        }


        return(
            <div>
                <h2>{_title}</h2>
                <p>{_desc}</p>                
            </div>
        );
    }
}

export default ReadContent;