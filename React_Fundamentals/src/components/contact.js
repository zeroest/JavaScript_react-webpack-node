import React from 'react';
import update from 'react-addons-update';

import ContactInfo from './contactInfo';
import ContactDetail from './contactDetail';
import ContactCreate from './contactCreate';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactData:[
                {name: "Charlie", phone: "010-0000-0003" },
                {name: "Betty", phone: "010-0000-0002" },
                {name: "Abet", phone: "010-0000-0001" },
                {name: "David", phone: "010-0000-0004" }
            ],
            keyword: '',
            _name: '',
            _phone: '',
            selectedKey: -1
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount(){
         const contactData = localStorage.contactData;
         console.log(contactData)
         if(contactData){
             this.setState({
                 contactData: JSON.parse(contactData) 
             })
         }
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)){
            localStorage.contactData = JSON.stringify(this.state.contactData);
        }
    }
    //localStorage.clear();
    
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }
    handleClick(key) {
        this.setState({
            selectedKey: key,
            isSelected: true
        });
        console.log(key, 'is selected')
    }

    handleCreate(contact){
        this.setState({
            contactData: update(this.state.contactData, {
                $push: [contact]
            })
        })
    }
    handleRemove(){
        if(this.state.selectedKey < 0){
            return false;
        }
        this.setState({
            contactData: update(this.state.contactData, {
                $splice: [[this.state.selectedKey, 1]]
            }),
            selectedKey: -1
        })
    }
    handleEdit(_name, _phone){
        this.setState({
            contactData: update(this.state.contactData,{
                [this.state.selectedKey]: {
                    name: {$set: _name},
                    phone: {$set: _phone}
                }
            })
        })
    }
    
    render(){

        const cpnt_mapping = (data)=>{
            data.sort((a,b)=>{
                return a.name > b.name;
            });
            data = data.filter((contact)=>{
                return contact.name.toLowerCase()
                .indexOf(this.state.keyword.toLowerCase()) > -1;
            })
            return data.map((contact, i)=>{
                return <ContactInfo
                        key={i}
                        contact={contact}
                        onClick={()=>this.handleClick(i)}></ContactInfo>
            });
        }
        
        return(
            <div>
                <h1>Contacts</h1>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                ></input>
                {cpnt_mapping(this.state.contactData)}

                <hr></hr>

                <ContactDetail
                isSelected={this.state.selectedKey != -1}
                contact={this.state.contactData[this.state.selectedKey]}
                onRemove={this.handleRemove}
                onEdit={this.handleEdit}></ContactDetail>

                <ContactCreate
                onCreate={this.handleCreate}></ContactCreate>
            </div>
        )
    }
}

export default Contact;