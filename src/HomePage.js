import React, { Component } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import initialState from './initialState';
import Header from "./Header";
import UserCard from "./UserCard";

const token = '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'

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
        this.setUserState(initialState)    
    }

    setUserState = (data)=>{
        if(!data.avatar_url){
            this.setState({user:initialState, input:""});
        }
        else{
            this.setState({user:data, input:""});

        }
        console.log(this.state)
    }

    handleSubmit(){
        const URL = `https://api.github.com/users/${this.state.input}`
        var bearer = 'Bearer ' + token;

        fetch(URL,{
            method: 'GET', 
            headers: {
                'Authorization': bearer,
            }
        })
            .then(res => res.json())
            .then(data =>{
                if(data.message){
                    this.setState({error:data.message})
                }
                else{
                   this.setUserState(data)                }
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
                <Header 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    setInitialState={this.setUserState}
                    inputValue={this.state.input}/>
                {this.state.user.avatar_url?
                <UserCard user={this.state.user} /> :
                <div></div>
            }
               
            </div>
        )
    }
}
export default HomePage