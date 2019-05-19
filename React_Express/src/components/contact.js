import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactData:[
                {name: "Abet", phone: "010-0000-0001" },
                {name: "Betty", phone: "010-0000-0002" },
                {name: "Charlie", phone: "010-0000-0003" },
                {name: "David", phone: "010-0000-0004" },
            ]
        }
    }
    render(){
        //let data = this.state.contactData;

        const mapToComponent = (_data) => {
            return _data.map((contact, i)=>{
                return <ContactInfo
                        key={i}
                        contact={contact}></ContactInfo>
            })
        };

        return(
            <div className="Contact">
                {mapToComponent(this.state.contactData)}
                {/* <div>Abet 010-0000-0001</div>
                <div>Betty 010-0000-0002</div>
                <div>Charlie 010-0000-0003</div>
                <div>David 010-0000-0004</div> */}
            </div>
        );
    }
}

class ContactInfo extends React.Component{
    render(){
        return(
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        )
    }
}

export default Contact;