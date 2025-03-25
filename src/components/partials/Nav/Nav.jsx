import { useState } from "react";
import classes from "./nav.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
function Nav() {
  const [currentLink, setCurrentLink] = useState(null);

  return (
    <nav>
      <div className={classes.logoDivLink}>
        <Link
          to="/"
          onClick={() => setCurrentLink(0)}
          className={window.location.pathname === '/' ? classes.underline : ""}
        >
          Articles
        </Link>
        <a>About me</a>
      </div>
      <img src={logo} className={classes.logoImg} />
      <div className={classes.logoDivLink}>
        <Link
        to="/session"
        onClick={() => setCurrentLink(3)}
        className={window.location.pathname === '/session' ? classes.underline : ""}
        >Log in</Link>
        <Link
          to="/session/new"
          onClick={() => setCurrentLink(4)}
          className={window.location.pathname === '/session/new' ? classes.underline : ""}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
