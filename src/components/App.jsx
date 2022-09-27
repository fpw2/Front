import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { Provider } from "react-redux"
// import {store} from "./redux/store"
import Navbar from '../layout/Navbar';
import Home from '../pages/Home';
import SignIn from "../pages/Sign-in";
import User from "../pages/User";
import Footer from "../layout/Footer";

export default function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/user" element={<User />}></Route>
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}