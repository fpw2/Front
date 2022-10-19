import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from '../layout/Header';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Profil from "../pages/Profil";
import Footer from "../layout/Footer";
import ProtectedRoute from "../routing/ProtectedRoute";
import Error from "./error/Error";

export default function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profil />}></Route>
              </Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}