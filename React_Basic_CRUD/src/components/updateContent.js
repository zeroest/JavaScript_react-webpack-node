import React from 'react';

class UpdateContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.findToItem.title
            ,desc: this.props.findToItem.desc
        }
        this.valueHandler = this.valueHandler.bind(this);
    }

    valueHandler(e){
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let findToItem = this.props.findToItem;

        if(findToItem === undefined){
            return(
                <div>

                </div>
            )
        }else{
            //let _title = findToItem.title;
    
            return(
                <div>
                    <h2>UPDATE</h2>
                    <form action="./create" method="post" onSubmit={function(e){
                        e.preventDefault();
                        //alert(e.target.title.value +" : "+ e.target.desc.value);
                        this.props.onUpdate(e.target.title.value, e.target.desc.value);
                    }.bind(this)}>
                        <p><input tyep="text" name="title" placeholder="title" value={this.state.title}
                            onChange={
                                this.valueHandler
                            }></input></p>
                        <p><input type="textarea" name="desc" placeholder="description" value={this.state.desc}
                            onChange={
                                this.valueHandler
                            }></input></p>
                        <p><input type="submit" value="제출"></input></p>
                    </form>
                </div>
            );
        }
    }//render end
}

export default UpdateContent;