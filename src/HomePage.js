import React, { Component } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import initialState from './initialState';
import Header from "./Header";
import UserCard from "./UserCard";

const token = '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'
const bearer = 'Bearer ' + token;

class HomePage extends Component{
    constructor (props){
        super(props);
        this.state = {
            user:{},
            input:"",
            error:"",
            userName:"",
            repos:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setNewUser = this.setNewUser.bind(this)
        this.setNewRepo = this.setNewRepo.bind(this)

    };

    componentDidMount(){
        this.setState({
            user:initialState, 
            error:"",
            userName:initialState.login,
            repos:[]
        });   
    }

    setNewUser = (data)=>{
            this.setState({
                user:data, 
                userName:data.login, 
                input:"",
            });
        };
    
    setNewRepo = (data)=>{
        this.setState({
            repos:this.state.repos.push(data)
        });
    };

    handleSubmit(){

            const URL = `https://api.github.com/users/${this.state.input}`
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
                       this.setNewUser(data)
                       this.getUserRepo(data.login)
                    }
            });
    }
       getUserRepo(name){
          
            const URL_repo = `https://api.github.com/users/${name}/repos?per_page=100`
            const niz= []
            fetch(URL_repo,{
                method: 'GET', 
                headers: {
                    'Authorization': bearer,
                }
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        this.setNewRepo(niz)
                    })
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
                <UserCard user={this.state.user} 
                        getUserRepos={this.handleSubmit}
                        repos={this.state.repos}/> :
                <div></div>
            }
               
            </div>
        )
    }
}
export default HomePage