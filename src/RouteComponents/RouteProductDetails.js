import React,{useState,useEffect} from 'react';
import Api from "../Utility/restapi";
import Cards from "../Components/ProductDetails/Cards";



const RouteProductDetails = () => {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    let res = await Api.get("/api/product");
    console.log(res);
    setProduct(res);
  };
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
