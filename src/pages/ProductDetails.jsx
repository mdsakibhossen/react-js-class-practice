import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { CartContext } from "../contexts/Cart";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useContext(CartContext)

  // console.log(productId);
  //   Get Product Details
  const getProductDetails = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await res.json();
    setProduct(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProductDetails(); // Fetching products
  }, []);


  if (isLoading) {
    return (
      <Container>
        <main className="grid place-items-center h-[80vh]">
          <h2 className="text-lxl md:text-3xl font-medium">Loading...</h2>
        </main>
      </Container>
    );
  }
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="img  flex justify-center">
          <img
            className="max-w-[450px] rounded-sm"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="info">
          <h2 className="font-semibold text-lg md:text-2xl mb-3 text-center sm:text-start">
            {product?.title}
          </h2>
          <p className="mb-3">{product?.description}</p>
          <p className="mb-2">
            <strong>Price: </strong>
            <span>${product?.price}</span>
          </p>
          <p>
            <strong>Discounted Price: </strong>
            <span>
              $
              {Math.floor(
                product?.price -
                  (product?.price * parseInt(product?.discount)) / 100
              )}
            </span>
            <small className="bg-red-400 text-white py-0.5 rounded-full px-2 inline-flex items-center ms-2">
              Save {product?.discount}
            </small>
          </p>
          <div className="btn mt-3 text-center sm:text-start">
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              className="bg-blue-400 px-5 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-all active:bg-blue-700 mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
