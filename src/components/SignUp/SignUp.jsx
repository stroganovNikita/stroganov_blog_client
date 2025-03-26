import { useState } from "react";
import Nav from "../partials/Nav/Nav";
import classes from "./signup.module.css";
import brain from "../../assets/brain.png";

function SignUp() {
  const [response, setResponse] = useState(0);

  const handleSubmit = (event) => {
    const body = event.currentTarget.elements;
    event.preventDefault();
    fetch("http://localhost:3000/session/new", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: body.firstname.value,
        lastname: body.lastname.value,
        nickname: body.nickname.value,
        password: body.password.value,
        confpassword: body.password.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      });
  };

  return (
    <>
      <Nav />
      <main className={classes.mainSignUp}>
        <form onSubmit={handleSubmit}>
          <h2>Registration</h2>
          {response.errors && (
            <ul>
              {response.errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          )}
          {response.data && <p>{response.data}</p>}
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            minLength="5"
            maxLength="20"
            required
          />
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            minLength="5"
            maxLength="20"
            required
          />
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
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
          <label htmlFor="confpassword">Confirm password</label>
          <input
            type="password"
            id="confpassword"
            name="confpassword"
            minLength="8"
            maxLength="25"
            required
          />
          <button type="submit">Sign up</button>
        </form>
        <h3 className={classes.textBeforeBrain}>Hi, I'm brain</h3>
        <img src={brain} className={classes.brain} />
      </main>
    </>
  );
}

export default SignUp;
