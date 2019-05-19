import React from 'react';

class CreateContent extends React.Component{
    render(){
        return(
            <div>
                <h2>CREATE</h2>
                <form action="./create" method="post" onSubmit={function(e){
                    e.preventDefault();
                    //alert(e.target.title.value +" : "+ e.target.desc.value);
                    this.props.onSmit(e.target.title.value, e.target.desc.value);
                    e.target.title.value= "";
                    e.target.desc.value= "";
                }.bind(this)}>
                    <p><input tyep="text" name="title" placeholder="title"></input></p>
                    <p><input type="textarea" name="desc" placeholder="description"></input></p>
                    <p><input type="submit" value="제출"></input></p>
                </form>
            </div>
        );
    }
}

export default CreateContent;