import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const submitLogin = (data) => {
    console.log(data);
  };

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
