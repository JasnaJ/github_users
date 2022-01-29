import React, { useState, useEffect } from "react";
import {Form, Card, Image, Icon} from 'semantic-ui-react'

function Main() {
	const [userName, setUserName] = useState("");
	const [userData, setUserData] = useState("");
    const [followers, setFollowers] = useState("");
	const [following, setFolowwing] = useState("");
	const [repos, setRepos] = useState("");
    const [avatar, setAvatar] = useState("");
    const [company, setCompany] = useState("");
    const [location, setlocation] = useState("");
	const [email, setEmail] = useState("");
	const [twitterUsername, setTwitterUsername] = useState("");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

	let URL_user = `https://api.github.com/users/${input}`

    const handleSubmit = () =>{
        fetch(URL_user)
        .then(res => res.json())
        .then(data =>{
            if(data.message){
                setError(data.message)
            }
            else{
                setUserData(data)
                console.log(data)
                setError(null)
                setInput("")
            }        
        });
    }

    const handleSearch = (e) =>{
        setInput(e.target.value)
    }

	return (
		<div>
            <div className='navbar'>
                <div>
                    <img src='./GitHub-Mark-120px-plus.png' ></img>
                </div>
                <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder="Search Github users" onChange={handleSearch}></Form.Input>
                        <Form.Button content="Search"></Form.Button>
                    </Form.Group>
                </Form>
                </div>
            </div>
		</div>
	);
}

export default Main;
