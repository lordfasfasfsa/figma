import React from 'react'
import img from "../images/img.svg"
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";

const Nav = () => {
   return (
      <div>
         <nav>
            <div className="container">
               <div className="navbar">
                  <div className="chap">
                     <img src={img} alt="" />
                  </div>
                  <div className="orta">
                     <a href="#">Home</a>
                     <a href="#">About</a>
                     <a href="#">Product</a>
                     <a href="#">Blog</a>
                     <a href="#">Shop</a>
                     <a href="#">Contact us</a>
                  </div>
                  <div className="ong">
                     <BiSearch />
                     <FiShoppingCart />
                     <MdOutlinePersonOutline />
                  </div>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Nav