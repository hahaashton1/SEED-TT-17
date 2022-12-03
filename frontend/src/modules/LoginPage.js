import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
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
    //authenticate
  };

  return (
    <div className="loginPage">
      <h1>DBS!</h1>
      <Box
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
      </Box>
      {/* {isError ? (
        <p className="errorText">The password is wrong for this username</p>
      ) : (
        <div />
      )}

      <ActionButton text="Log In" onClick={onClickAuthenticate} /> */}
      <Button onClick={onClickAuthenticate} />
    </div>
  );
};

export default LoginPage;
