import React, {
    Component
} from 'react';

class Test extends Component {
    render() {
        //console.log("Test render")
        return ( 
            <header
            className = "Header" >
            <h1><a href="/" onClick={function(e){
                e.preventDefault();

                this.props.onChangePage();

                // if(this.props._mode == "welcome"){
                    
                //     this.setProps({
                //         _mode: "read"
                //     });
                    
                //     //this.props._mode = "read";
                //     console.log(this.props._mode);
                // }else{
                //     this.props._mode = "welcome";
                // }
            }.bind(this)}>{this.props.title}</a></h1>
            <p id="test" onClick={()=>{
                console.log(this);
                this.props.myFunction();
            }}>{this.props.sub}</p>
            </header>
        );
    } //render end
}

export default Test;