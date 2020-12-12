import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";



const Cartcontent = ({setCartVisibility,cartVisibility}) => {
    return (
        <>
        <div className="cart-content">
        <button className="cartcontent-button" onClick={()=>setCartVisibility(false)} >
        My Cart
        <AiOutlineArrowRight/></button>
        <button className="shopping-button" onClick={()=>setCartVisibility(false)}>Start Shopping</button>
        </div>
        </>
    )
}

export default Cartcontent
