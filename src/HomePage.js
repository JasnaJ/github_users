import React, { Component } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import initialState from './initialState';
import { ListGroup, ListGroupItem, Card, Container, Row, Col, Button, Navbar, Nav,Form, FormControl, Text } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

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
        this.setInitialState()
    }
    setInitialState =()=>{
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
            repos:this.state.repos.concat(data)
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
            console.log(this.state)
    }
       getUserRepo(name){
          
            const URL_repo = `https://api.github.com/users/${name}/repos?per_page=100`
            fetch(URL_repo,{
                method: 'GET', 
                headers: {
                    'Authorization': bearer,
                }
            })
                .then(res => res.json())
                .then(data =>{
                        this.setNewRepo(data)
                    })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })    }

    render(){
        const user = this.state.user
        const repo = this.state.repos.map(x=>{
            return  (<ListGroupItem size="sm" >
                        <Card.Body key={x.id}>
                            <label className="x_name">{x.name}</label>
                            <label className="x_visibility">{x.visibility}</label><br/> 
                            <label className="x_description">{x.description}</label><br/>
                            <Icon.CircleFill className='icon' />{x.language}  
                            <Icon.Star className='icon' />  {x.stargazers_count}
                            <Icon.Git className='icon' />{x.forks}
                        </Card.Body>
                    </ListGroupItem>)
        })
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >
                        Github 
                    </Navbar.Brand>
                    <Navbar.Brand >
                        <Nav className="me-auto">
                            <Button variant="dark" onClick={this.setInitialState}>Home</Button>
                        </Nav>            
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Github users"
                                aria-label="Search"
                                name="input"
                                onChange={this.handleChange}
                            />
                            <Button variant="light" onClick={this.handleSubmit}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container  fluid="sm" >
                    <Row>
                        <Col>
                            <Card className='card'>
                                <Card.Img className='picture' src={user.avatar_url} />
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Subtitle>{user.login}</Card.Subtitle>
                                </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem size="sm">
                                            <Icon.PeopleFill className='icon'/>{user.followers} followers
                                        </ListGroupItem>
                                        <ListGroupItem size="sm">
                                            <Icon.PeopleFill className='icon'/>{user.following} following
                                        </ListGroupItem>
                                        <ListGroupItem size="sm">
                                            <Icon.Building className='icon'/>{user.company} 
                                        </ListGroupItem>
                                        <ListGroupItem size="sm">
                                            <Icon.GeoAltFill className='icon'/>{user.location} 
                                        </ListGroupItem>
                                        <ListGroupItem size="sm">
                                            <Icon.Link45deg className='icon'/><a href={user.url}>{user.url}</a>
                                        </ListGroupItem>
                                    </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='card'>
                        <Card.Title variant="secondary" className="list-group-item-dark"size="sm" 
                            >Repositories  
                            <span title={user.public_repos} data-view-component="true" className="broj">
                                {user.public_repos}
                                </span>
                        </Card.Title>
                            <Card.Body>
                                <ListGroup>
                                    {repo}
                                </ListGroup>
                            </Card.Body>
                              
                        </Card>
                    </Col>
                </Row>
            </Container>
         
               
            </div>
        )
    }
}
export default HomePage