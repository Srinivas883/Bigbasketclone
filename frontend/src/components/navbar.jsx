import "./navbar.css"

import down from "../assets/down.png"
import up from "../assets/up.png"
import magnifyingglass from "../assets/magnifying-glass.png"
import cart from "../assets/trolley.png"
import { useEffect, useState } from "react"
import bigblogo from "../assets/BigBasket_Logo.svg.png"

import { useNavigate } from "react-router-dom"
import auth from "../config"


import { signOut } from "firebase/auth"


function Navbar() {


    const [categorybtn, setcategorybtn] = useState(false)
    const [loginstatus, setloginstatus] = useState(false)
    const navigate = useNavigate()

    function logout() {
        signOut(auth).then(() => { navigate("/login") })
    }

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("logged in")
                setloginstatus(true)
            } else {
                console.log("logged out")

            }
        })
    }, [])



    function handlecategorybtn() {
        setcategorybtn(!categorybtn)
    }

    return (<>
        <section className="Navbar">
            <img className="bigblogo" src={bigblogo} alt="bigblogo" onClick={() => { navigate('/') }} />

            {categorybtn ? <div onClick={handlecategorybtn} className="categorybtn1">
                <div>
                    <p>Shop by </p>
                    <h4>Cateogry</h4></div>
                <div>
                    <img src={down} alt="downtriangle" />
                </div>
            </div> : <div onClick={handlecategorybtn} className="categorybtn">
                <div>
                    <p>Shop by </p>
                    <h4>Cateogry</h4></div>
                <div>
                    <img src={up} alt="uptriangle" />
                </div>
            </div>}

            <div className="searchbar">
                <img src={magnifyingglass} alt="magnifyingGlass" />
                <input type="text" placeholder="Search for Products..." />
            </div>
            {loginstatus
                ? <button style={{ fontWeight: "bold" }} className="loggedinbtn" onClick={logout}>Logout</button>
                : <button style={{ fontWeight: "bold" }} className="loginbtn" onClick={() => { navigate("/login") }}>Login / SignUp</button>
            }

            <div className="cart">
                <img src={cart} alt="carticon" />
                <p>0</p>
            </div>
        </section>
    </>)
}

export default Navbar