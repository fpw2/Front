import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/ui-kit/Button";
import { toggle } from "../feature/theme.slice";

export default function Navbar() {
const dispatch = useDispatch()
const lightheme = useSelector(state => state)

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* j'appelle mon action avec dispatch() */}
        <Button className="theme-switcher" onClick={() => dispatch(toggle())}>{lightheme ? "dark" : "light"}</Button>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
