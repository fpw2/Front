import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from '../layout/Navbar';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Profil from "../pages/Profil";
import Footer from "../layout/Footer";

export default function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profil />}></Route>
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}