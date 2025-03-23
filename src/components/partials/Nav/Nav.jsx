import classes from './nav.module.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
          <div className={classes.logoDivLink}>
            <Link to='/'>Articles</Link>
            <a>About me</a>
          </div>
          <img src={logo} className={classes.logoImg}/>
          <div className={classes.logoDivLink}>
            <a>Log in</a>
            <Link to='/session/new'>Sign up</Link>
          </div>
        </nav>
    )
};

export default Nav