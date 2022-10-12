import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../feature/auth/authService";
// import Loader from "../components/ui-kit/Loader"

export default function LoginForm() {
  const navigate = useNavigate()
  // register = {...register} , handleSubmit on form
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userInfo)

  // Appel au backend
  const submitLogin = ({username, password}) => {
    dispatch(userLogin(username, password))
    console.log(username, password);
  };

  useEffect(() => {
    if(user) {
      navigate("/profile")
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(submitLogin)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      ;
    </>
  );
}
