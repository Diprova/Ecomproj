import React,{useState,useEffect} from 'react';
import Api from "../Utility/restapi";
import Cards from "../Components/Home/ProductDetails/Cards";



const RouteProductDetails = ({context}) => {
  console.log(context);
    const [product, setProduct] = useState([]);

    useEffect(() => {
      setProduct([...context.products]);
    },[]);
    useEffect(() => {
      if (!context.products.length) {
        context.getProduct();
      }
    }, [context.products]);


    return (
        <div className="product-slot">
        <div className="category">
        <h1>Fruites & Veggies</h1>
        </div>
        <div className="product-card">
        {product.map((item, index) => {
          return <Cards key={index} item={item} />;
        })}
      </div>
        </div>
    )
}

export default RouteProductDetails
