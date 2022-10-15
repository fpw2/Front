import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../feature/auth/authService";
import Button from "../ui-kit/Button";
import Error from "../error/Error";

export default function LoginForm() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm(); // register = {...register} , handleSubmit on form
  const dispatch = useDispatch()

  // state.login : name of my slice "login" in authService.js
  // je destructure pour récupérer les states qui m'intéressent
  const { userToken, error } = useSelector(state => state.user)

  // Appel à l'action avec les données input en paramètre
  const submitLogin = ({username, password}) => {
    dispatch(userLogin({username, password}))
  };

  useEffect(() => {
    if(userToken) {
      navigate("/profile")
    }
  }, [navigate, userToken])

  return (
    <>
      <form onSubmit={handleSubmit(submitLogin)}>
        {error && <Error>{error}</Error>}
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
        <Button type="submit" className="w100">Sign In</Button>      
      </form>
    </>
  );
}
