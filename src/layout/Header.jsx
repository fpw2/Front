import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../feature/auth/auth.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const dispatch = useDispatch()
  const { userInfo, userToken } = useSelector((state) => state.user)

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
        {userToken ? (
          <div className="header-profile">
            <FontAwesomeIcon className="fa-user" icon={faUser} />
            <p className="header-name">{userInfo.firstName}</p>
            {/* j'appelle mon action "user/logout" avec dispatch() */}
            <Link to="/" className="main-nav-item" onClick={() => dispatch(logout())}>
            <FontAwesomeIcon className="fa-bracket" icon={faRightFromBracket} />
              Sign out
            </Link>
          </div>
        ) : (<>
            <Link to="/login" className="main-nav-item">
              Sign In
            </Link>
        </>)} 
      </div>
    </nav>
  );
}
