import { React, useState } from "react";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      label="Login"
    />
  );
};

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      label="Register"
    />
  );
};

const Form = ({ username, setUserName, password, setPassword, label }) => {
  return (
    <div className="auth-container">
      <form>
        <h2> {label} </h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">{label}</button>
      </form>
    </div>
  );
};
