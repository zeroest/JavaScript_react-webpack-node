import React from 'react';

class Controller extends React.Component{
    shouldComponentUpdate(newProps, newState){
        return false;
    }
    render(){
        console.log("controller render")
        const CREATE = "create";
        const UPDATE = "update";
        const DELETE = "delete";

        return(
            <div>
                <ul>
                    <li><a href="/create"
                    onClick={(e)=>{
                        e.preventDefault();
                        this.props.chMode(CREATE);
                    }}>{CREATE}</a></li>
                    <li><a href="/update"
                    onClick={(e)=>{
                        e.preventDefault();
                        this.props.chMode(UPDATE);
                    }}>{UPDATE}</a></li>
                    <li><input type="button" value={DELETE}
                    onClick={(e)=>{
                        e.preventDefault();
                        this.props.chMode(DELETE);
                    }}></input></li>
                </ul>
            </div>
        );
    }
}

export default Controller;