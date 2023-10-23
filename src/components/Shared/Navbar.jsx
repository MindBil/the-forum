import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import CallIcon from "@mui/icons-material/Call";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <h1>THE FORUM</h1>
          <h4>ASK ANYTHING</h4>
        </li>
        <li>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Person4Icon />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <CallIcon />
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/register">
            <AppRegistrationIcon />
            Register
          </Link>
        </li>
        <li>
          <Link to="/login">
            <LoginIcon />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
