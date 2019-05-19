import React, {
    Component
} from 'react';

class Article extends Component {
    render() {
        //console.log("Article render")
        return ( 
            <article className = "Article" >
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    } //render end
}

export default Article;