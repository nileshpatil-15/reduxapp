import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SelectedProduct, RemoveProduct } from "../Redux/Actions";
function SingleProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const choosedProduct = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    function fetchProduct() {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          dispatch(SelectedProduct(response.data));
        })
        .catch((err) => {
          console.log(err); 
        });
    }

    fetchProduct();
// cleanup
    return () => {
      dispatch(RemoveProduct());
    };
  }, [productId]);

  console.log(choosedProduct.id);

  return (
  
    <div className="h-[100vh] bg-red-200 flex justify-center items-center">
        {
      choosedProduct.id!==undefined?
      (   <div className="flex">
      <div>
        <img src={choosedProduct.image} className="w-[420px]" />
      </div>
      <div>
        <h1 className="text-[35px]">{choosedProduct.title}</h1>
        <h1 className="text-2xl">{choosedProduct.description}</h1>
        <h1>{choosedProduct.price}</h1>
        <button> BUY NOW</button>
        <br />
        <button> ADD TO Cart</button>
      </div>
    </div>):<h1>loading ....</h1>
    }
      
   
    </div>
  );
}

export default SingleProduct;
