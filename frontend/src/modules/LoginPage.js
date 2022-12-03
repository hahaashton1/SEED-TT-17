import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
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

  const onClickAuthenticate = async () => {
    const userObject = {
      username: username,
      password: password,
    };
    console.log(userObject);

    const response = await authenticate(userObject);
    console.log(response);
    setIsLoggedIn(response.data.correct_password);
    //authenticate
  };

  if(isLoggedIn){
    return <Navigate to="/dashboard"/>
  }

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

      {/* <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="Username"
          label="Username"
          variant="outlined"
          error={isError}
          value={username}
          onChange={onChangeUsername}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          error={isError}
          value={password}
          onChange={onChangePassword}
        />
      </Box> */}
      {/* {isError ? (
        <p className="errorText">The password is wrong for this username</p>
      ) : (
        <div />
      )}*/}

      <Button variant="danger" onClick={onClickAuthenticate}>Log In!</Button>
      </div> 
      </Card>
    
    </div>
  );
};

export default LoginPage;