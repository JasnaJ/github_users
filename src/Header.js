import React,{Component} from 'react'
import { Button, Form, FormControl, Navbar, Container, Nav, NavItem } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component{

    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="./iconmonstr-github-1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{' '}*/}Github 
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search Github users"
                    aria-label="Search"
                    name="input"
                    onChange={this.props.handleChange}
                    />
                    <Button variant="light" onClick={this.props.handleSubmit}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
export default Header;