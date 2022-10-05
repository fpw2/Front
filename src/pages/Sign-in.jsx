import {Link} from "react-router-dom"
import { useDispatch,  } from "react-redux";
import { useForm } from "react-hook-form";

import { login } from "../feature/login.slice";

export default function SignIn() {
  const { register, setError, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const submit = value => {
    const data = { email: value.username, password: value.password }
    dispatch(login(data))
}

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <Link to="/user" className="sign-in-button">
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
}
