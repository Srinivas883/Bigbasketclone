import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Loggedout from "./components/loggedout";
import Login from "./components/login";
import SignUp from "./components/signup";
import Productdetail from "./components/productdetail"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loggedout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Productdetail/:id" element={<Productdetail />}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App