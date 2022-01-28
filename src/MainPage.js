import React, { useState, useEffect } from "react";


function Main() {
	//const [username, setUsername] = useState("");
	//const [userData, setUserData] = useState(Object);
    let id=0
	let URL_users = "https://api.github.com/users"
    let URL_userId = `https://api.github.com/users/${id}`

	useEffect(() => {
		fetch(URL_users)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            });
	},[]);

	return (
		<div>
		</div>
	);
}

export default Main;
