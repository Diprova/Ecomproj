import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import CartComponent from './CartComponent';



const Cartcontent = ({setCartVisibility,cartVisibility,context}) => {
    
    return (
        <>
        <div className="cart-content">
        <button className="cartcontent-button" onClick={()=>setCartVisibility(false)} >
        My Cart
        <AiOutlineArrowRight/></button>
        <CartComponent context={context}/>
        <button className="shopping-button" onClick={()=>setCartVisibility(false)}>Start Shopping</button>
        </div>
        </>
    )
}

export default Cartcontent
