import React, { Component } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import initialState from './initialState';
import Header from "./Header";
import UserCard from "./UserCard";

class HomePage extends Component{
    constructor (){
        super();
        this.state = {
            user:{},
            input:"",
            error:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount(){
        this.setNewState()    
    }

    setNewState(){
        this.setState(Object.assign(this.state.user,initialState));
        console.log(this.state)
    }

    handleSubmit(){
        const URL = `https://api.github.com/users/${this.state.input}`
        fetch(URL)
            .then(res => res.json())
            .then(data =>{
                if(data.message){
                    this.setState({error:data.message})
                }
                else{
                    this.setState(Object.assign(this.state.user,data));
                }
        });
        console.log(this.state)
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })    }

    render(){
        return(
            <div>
                <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                {this.state.user.avatar_url?
                 <UserCard user={this.state.user}/> :
                 <div></div>
            }
               
            </div>
        )
    }
}
export default HomePage