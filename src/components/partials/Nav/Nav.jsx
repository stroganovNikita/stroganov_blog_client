import { useState, useEffect } from "react";
import classes from "./nav.module.css";
import checkTokenFetch from "../../javascript/checkTokenFetch";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const [currentLink, setCurrentLink] = useState(null);
  const [checkToken, setCheckToken] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let checkFn = checkTokenFetch();
    checkFn.then((answer) => setCheckToken(answer));
  }, []);

  function logout() {
    localStorage.removeItem('token');
    window.location.reload()
  }


  return (
    <nav>
      <div className={classes.logoDivLink}>
        <Link
          to="/"
          onClick={() => setCurrentLink(0)}
          className={window.location.pathname === "/" ? classes.underline : ""}
        >
          Articles
        </Link>
        <a>About me</a>
      </div>
      <img src={logo} className={classes.logoImg} />
      <div className={classes.logoDivLink}>
        {checkToken.data ? (
          <Link onClick={logout}>Log out</Link>
        ) : (
          <>
            <Link
              to="/session"
              onClick={() => setCurrentLink(3)}
              className={
                window.location.pathname === "/session" ? classes.underline : ""
              }
            >
              Log in
            </Link>
            <Link
              to="/session/new"
              onClick={() => setCurrentLink(4)}
              className={
                window.location.pathname === "/session/new"
                  ? classes.underline
                  : ""
              }
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
