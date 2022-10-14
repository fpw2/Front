import { useSelector } from "react-redux";
import LoginForm from "../components/login/LoginForm";
import Loader from "../components/ui-kit/Loader";

export default function Login() {
  const { loading } = useSelector(state => state.user)

  return (
  <>
    {loading ? (
      <Loader />
    ) : (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <LoginForm />
        </section>
      </main>
    )}
  </>
  )
}
