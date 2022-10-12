import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  // register = {...register} , handleSubmit on form

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if(token) {
  //     navigate("/profile")
  //     localStorage.removeItem("token")
  //   }
  // }, [token])

  // const logout = () => {
  //   localStorage.removeItem("user");
  // };

  /**
   * Retrieve data of form
   * @param {object} {username, password}
   */
  // const login = ({ username, password }) => {
  //   fetch("http://localhost:3001/api/v1/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", // dit que je lui envoie du JSON
  //     },
  //     body: JSON.stringify({ email: username, password: password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //console.log(data)
  //       const token = data.body.token; // a mettre dans le state
  //       localStorage.setItem("token", token);
  //     });
  // };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
}
