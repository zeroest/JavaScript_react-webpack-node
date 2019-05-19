import React from 'react';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div
            onClick={this.props.onClick}>
                {this.props.contact.name}&nbsp;||&nbsp;
                {this.props.contact.phone}
            </div>
        )
    }
}