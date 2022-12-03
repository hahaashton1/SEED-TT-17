import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import 'reactjs-popup/dist/index.css';
import background from "../assets/mbs.jpg";
import { authenticate } from "../services/Authentication";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate(); 

  const onClickAuthenticate = async () => {
    const userObject = {
      username: username,
      password: password,
    };
    console.log(userObject);

    const response = await authenticate(userObject);
    console.log(response);
    setIsLoggedIn(response.data.is_loggedin);

    if(response.data.is_loggedin){
      navigate("/dashboard")
    } else {
      alert("Incorrect username/password")
    }
  };

  return (
    <div className="loginPage" style={{paddingTop: "300px", paddingBottom: "300px", backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <Card>
      <div style={{margin: '15px', boxShadow: '20px'}}>
      <h1>Welcome to DBS!</h1>
      <br></br>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username}
            onChange={onChangeUsername} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
            onChange={onChangePassword}/>
        </Form.Group>

      <Button variant="danger" onClick={onClickAuthenticate}>Log In!</Button>

      </div> 
      </Card>
    
    </div>
  );
};

export default LoginPage;
