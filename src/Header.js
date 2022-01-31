import React,{Component} from 'react'
import { Button, Form, FormControl, Navbar, Nav, } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component{

    render(){
        return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >
                Github 
            </Navbar.Brand>
            <Navbar.Brand >
                <Nav className="me-auto">
                    <Button variant="dark" onClick={this.props.setInitialState}>Home</Button>
                </Nav>            
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Github users"
                        aria-label="Search"
                        name="input"
                        value={this.props.inputValue}
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