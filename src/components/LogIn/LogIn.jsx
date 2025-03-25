import { useState, useEffect } from "react";
import validity from "../javascript/checkTokenFetch";
import Nav from "../partials/Nav/Nav";
import classes from "./login.module.css";
import brain from "../../assets/brain.png";

function LogIn() {
  const [response, setResponse] = useState(0);
  const [checkToken, setCheckToken] = useState(0);

  useEffect(() => {
    let checkFn = validity;
    setCheckToken(checkFn);
  });

  const handleSubmit = (event) => {
    const body = event.currentTarget.elements;
    event.preventDefault();
    fetch("http://localhost:3000/session", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: body.nickname.value,
        password: body.password.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => setResponse(response));
  };

  if (checkToken.data) {
    return (
      <>
        <Nav />
        <h2 className={classes.infoAuth}>You are authorize</h2>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className={classes.mainLogIn}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {response.errors && (
            <ul>
              {response.errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          )}
          {response.data && localStorage.setItem("token", response.data)}
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            minLength="5"
            maxLength="20"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength="25"
            required
          />
          <button type="submit">Login</button>
        </form>
        <h3 className={classes.textBeforeBrain}>How are you?</h3>
        <img src={brain} className={classes.brain} />
      </main>
    </>
  );
}

export default LogIn;
