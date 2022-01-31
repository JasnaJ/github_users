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
        return(
            <div>
                {(this.props.repos)?
                    <div>Imam neki repo</div> :
                    <div></div>
                }
            </div>
        )
    }
}
export default RenderRepositories