import React, {
    Component
} from 'react';


class Nav extends Component {
    constructor(){
        super();
        this.state = {
            test: "test"
        }
    }

    shouldComponentUpdate(newProps, newState){
        console.log("===> shouldComponentUpdate")
        console.log(this.props.data, newProps.data)
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }

    render() {
        console.log("===> render")
        //console.log("Nav render");
        //console.log(this.state.test);
        let data = this.props.data;
        let lists = [];
        for(let a in data){
            lists.push(
            <li key={data[a].id}>
            <a href={"/content/"+data[a].id}
            data-id={data[a].id}
            onClick={function(id, str, e){
                e.preventDefault();
                //console.log(e.target.dataset.id)
                //console.log(str);
                //this.props.fncChange(id);
                this.props.fncChange(e.target.dataset.id);
            }.bind(this, data[a].id, "test")}>{data[a].title}</a>
            </li>);
        }

        return ( 
            <nav className = "Nav" >
                <ul>
                    {lists}
                    {/* <li><a href="*">html</a></li>
                    <li><a href="*">css</a></li>
                    <li><a href="*">javascript</a></li>
                    <li><a href={this.props.test1} >{this.props.test1}</a></li> */}
                </ul>
                {/* {this.props.test2}             */}
            </nav>
        );
    } //render end
}

export default Nav;