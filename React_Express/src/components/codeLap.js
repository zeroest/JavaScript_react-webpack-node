import React from 'react';
import PropTypes from 'prop-types';

class Codelap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            value: this.state.value + 1
        })
        // this.state.value++;
        // this.forceUpdate();
        // 작동은 가능 하지만 사용하지 말자
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>{this.props.children}</p>
                <hr></hr>
                <h2>{this.state.value}</h2>
                <button
                onClick={this.handleClick}>Plus Button</button>
            </div>
        );
    }
}

Codelap.propTypes={
    name: PropTypes.string.isRequired,
    children: PropTypes.number.isRequired
}

export default Codelap;