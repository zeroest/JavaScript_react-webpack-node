import React from 'react';
import ReadContent from './readContent';
import CreateContent from './createContent';
import UpdateContent from './updateContent';

class Content extends React.Component{
    render(){
        console.log("content render")

        const READ = 'read';
        const CREATE = 'create';
        const UPDATE = 'update';

        let mod = this.props.mode;
        let _Content;

        let ts = this.props.tocs;
        let id = this.props.item;

        let findToItem = ts.find((item)=>{
            return item.id === id;
        })

        if(mod === READ || mod === 'welcome'){
            let md = READ;
            if(mod === 'welcome'){
                md = 'welcome'
            }
            _Content = <ReadContent
                        tocs={this.props.tocs}
                        item={this.props.item}
                        md={md}></ReadContent>
        }else if(mod === CREATE){
            _Content = <CreateContent
                        onSmit={function(_title, _desc){
                            // alert(_title +" : "+ _desc);
                            this.props.onCreate(_title, _desc);
                        }.bind(this)}></CreateContent>
        }else if(mod === UPDATE){
            if(findToItem === undefined){
                _Content = null;
            }else{
                _Content = <UpdateContent
                            // tocs={this.props.tocs}
                            // item={this.props.item}
                            findToItem={findToItem}
                            onUpdate={(_title, _desc)=>{
                                this.props.onCreate(_title, _desc, this.props.item);
                            }}></UpdateContent>
            }
        }

        return(
            <div>
                {_Content}
            </div>
        );
    }// render end
}

export default Content;