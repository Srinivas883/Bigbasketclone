import banana from "../assets/fruitvegbig1.webp"
import cauliflower from "../assets/fruitvegbig2.webp"
import carrot from "../assets/fruitvegbig3.webp"
import chili from "../assets/fruitvegbig4.webp"

import babywipes0 from "../assets/babywipesbig0.webp"
import babywipes1 from "../assets/babywipesbig1.webp"
import babywipes2 from "../assets/babywipesbig2.webp"
import babywipes3 from "../assets/babywipesbig3.webp"

import { useParams } from "react-router-dom"

import "./productdetail.css"

import Navbar from "./navbar"


function Productdetail() {

    const numericId = (Number(useParams().id) - 1);

    const products = [
        { id: 1, image: banana, name: "Banana - Yelakki", price: 64, originalPrice: 109 },
        { id: 2, image: carrot, name: "Carrot - Orange (Loose)", price: 40, originalPrice: 104 },
        { id: 3, image: cauliflower, name: "Cauliflower", price: 31, originalPrice: 47 },
        { id: 4, image: chili, name: "Green Chili", price: 81, originalPrice: 107 },
        { id: 5, image: babywipes0, name: "Baby Wipes - Fresh", price: 275, originalPrice: 280 },
        { id: 6, image: babywipes1, name: "Skincare Wipes", price: 275, originalPrice: 280 },
        { id: 7, image: babywipes2, name: "Baby Wipes with Aloe Vera", price: 297, originalPrice: 450 },
        { id: 8, image: babywipes3, name: "Baby Wipes - With Aloe", price: 418, originalPrice: 598 }
    ]

    const percentageoff = (100 - ((products[numericId].price / products[numericId].originalPrice) * 100)).toFixed(0)

    return (
        <>
            <Navbar />
            <section className="productdetail">
                <div className="prosec1">
                    <img src={products[numericId].image} alt="" />
                </div>
                <div className="prosec2">
                    <p className="fresho"> fresho!</p>
                    <p className="productname">₹{products[numericId].name}</p>
                    <p className="productorgprice">MRP:<span>₹{products[numericId].originalPrice}</span></p>
                    <p className="productprice">Price: ₹{products[numericId].price}</p>
                    <p className="yousave">You Save: <span>{percentageoff}% OFF</span></p>
                    <p className="taxes">(inclusive of All Taxes)</p>
                    <button className="proaddbtn">Add to Basket</button>
                </div>
            </section>
        </>
    )
}

export default Productdetail