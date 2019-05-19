import React from 'react';
import './App.css';
//import PropTypes from 'prop-types';

import Codelap from './components/codeLap';
import Contact from './components/contact';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            value:0
        }
    }
    render(){
        return (
            <div>
                <Codelap
                name={this.props.name}>{this.props.children}</Codelap>
                <hr></hr>
                <Contact></Contact>
            </div>
       );
    }
}

App.defaultProps={
    name: "기본이름",
    children: "기본아이들"
}

export default App;