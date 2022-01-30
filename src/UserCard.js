import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Card, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Card className='card'>
                <Container className='picture'>
                    <Card.Img className='picture' src={user.avatar_url} />
                </Container>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.login}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                  <Icon.PeopleFill className='icon'/>{user.followers} followers
              </ListGroupItem>
              <ListGroupItem>
                    <Icon.PeopleFill className='icon'/>{user.following} following
              </ListGroupItem>
              <ListGroupItem>
                  <Icon.Building className='icon'/>{user.company} 
              </ListGroupItem>
              <ListGroupItem>
                  <Icon.GeoAltFill className='icon'/>{user.location} 
              </ListGroupItem>
              <ListGroupItem>
                  <Icon.Link45deg className='icon'/><a href={user.url}>{user.url}</a>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        )
    }

}
export default UserCard;