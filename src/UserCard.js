import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Card, Container, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderRepositories from './RenderRepositories';

class UserCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            picture:null
        }
    }

    render(){
        const user = this.props.user;
        return(
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
                        <Button variant="secondary" size="sm" 
                            onClick={() => this.props.getUserRepos(user.login)}>Repositories
                            <span title={user.public_repos} data-view-component="true" className="broj">
                                {user.public_repos}
                                </span>
                        </Button>
                            <Card.Body>
                                <RenderRepositories repos={this.props.repos}/>
                            </Card.Body>
                              
                        </Card>
                    </Col>
                </Row>
            </Container>
    
        )
    }

}
export default UserCard;