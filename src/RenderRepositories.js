import React, { Component } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class RenderRepositories extends Component{

    // componentDidUpdate(){
    //     if(this.props & this.props.repos){
    //         console.log("da")
    //     }
    // }

    render(){
        let repo = this.props.repos[0];
        console.log(repo)
        return(
            <div>
                {/* {(this.props.repos)?
                    <div>Imam neki repo</div> :
                    <div></div>
                } */}
                Imam neki repo
            </div>
        )
    }
}
export default RenderRepositories