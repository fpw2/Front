import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../feature/auth/authService";
import { remember } from "../../feature/auth/auth.slice";
import Button from "../ui-kit/Button";
import ErrorLoginForm from "../error/ErrorLoginForm";

export default function LoginForm() {
  const userNameStorage = localStorage.getItem("username")
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm(); // register = {...register} , handleSubmit on form
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  console.log("val", userName)
  console.log("Storage", userNameStorage)

  // state.user => user: userReducer in my store in authService.js
  // I destructure the state for 
  const { userToken, error } = useSelector(state => state.user)
  const { userRemember } = useSelector((state) => state.user)
  
  /**
   * Call the userLogin action 
   * @param {object} username lastname
   */ 
  const submitLogin = (data) => {
    dispatch(userLogin(data))
  };
  
  useEffect(() => {
    if(userToken) {
      navigate("/profile")
    }
    // if(userNameStorage) {
    //     dispatch(remember(userNameStorage))
    //   }
    }, [navigate, userToken, userNameStorage, dispatch])
    
  /**
   * Call the remember action
   */
  function handleRememberClick() {
      dispatch(remember(userName))
  }


  /**
   * Retrieve the value of input Username
   * @param {event} 
   */
  function handleUsernameChange(e) {
    setUserName(e.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(submitLogin)}>
        {error && <ErrorLoginForm>{error}</ErrorLoginForm>}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input  type="text" id="username" defaultValue={userNameStorage} {...register("username", {onChange: handleUsernameChange})} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} required />
        </div>
        <div className="input-remember">
          <input onChange={handleRememberClick} type="checkbox" id="remember-me" defaultChecked={userRemember ? userRemember : false} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button type="submit" className="w100">Sign In</Button>      
      </form>
    </>
  );
}
