import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isEdit: false,
            name: this.props.contact.name,
            phone: this.props.contact.phone
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleToggle(){
        if(this.state.isEdit){
            this.handleEdit();
        }else{
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }
        this.setState({
            isEdit:  !this.state.isEdit
        })
        // setState는 비동기 방식이기 때문에 console 먼저 출력된다.
    }
    handleChange(e){
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState)
    }

    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleKeyPress(e){
        if(e.charCode === 13){
            this.handleToggle();
        }
    }

    render(){

        const blank = (<div></div>);

        const detail = (<div>
                            <p>{this.props.contact.name}</p>
                            <p>{this.props.contact.phone}</p>
                        </div>);

        const edit_form = (<div>
                            <p><input 
                                type="text" 
                                name="name" 
                                placeholder="name" 
                                value={this.state.name} 
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                                ></input></p>
                            <p><input 
                                type="text" 
                                name="phone" 
                                placeholder="phone"
                                value={this.state.phone} 
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                                ></input></p>
                            </div>)

        const view = this.state.isEdit ? edit_form : detail

        const form = (<div className="list">
                        <h2>Detail</h2>
                        {/* {this.props.isEdit ? edit_form : detail} */}
                        {view}
                        <p>
                            <button onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'Edit'}</button>
                            <button onClick={this.props.onRemove}>Remove</button>
                        </p>
                        <hr></hr>
                        </div>);

        return(
            <div>
                {this.props.isSelected ? form : blank}
            </div>
        )
    }
}

ContactDetail.defaultProps={
    contact:{
        name: '',
        phone: null
    },
    onRemove: ()=> console.error('onRemove() is not defined')
}

ContactDetail.propTypes={
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    contact: PropTypes.object
}