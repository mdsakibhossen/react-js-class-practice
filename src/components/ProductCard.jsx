import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";

const ProductCard = ({ product }) => {
  const { id, image, title, price, description, discount } = product;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="product-card shadow group relative">
      {Boolean(parseInt(discount)) && (
        <div className="badge bg-red-400 text-slate-200 px-3 rounded-xl w-min absolute top-3 right-3 z-10">
          {discount}
        </div>
      )}

      <div className="img overflow-hidden rounded rounded-b-none h-64 md:h-52 object-cover">
        <Link to={`/products/${id}`}>
          <img
            className="w-full h-full group-hover:scale-110 transition-all"
            src={image}
            alt={title}
          />
        </Link>
      </div>
      <div className="info flex flex-col gap-2 p-4">
        <h3 className="text-xl font-medium transition-all group-hover:text-blue-400">
          {title}
        </h3>
        <p>
          {description.length > 30
            ? description.slice(0, 30) + "..."
            : description}
        </p>

        <p className="font-semibold text-2xl">
          ${Math.floor(price - (price * parseInt(discount)) / 100)}
          {parseInt(discount) && (
            <sub className="text-slate-400 line-through">${price}</sub>
          )}
        </p>

        <div className="btn mt-3">
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
            className="bg-blue-400 w-full py-1.5 rounded hover:bg-blue-500 hover:text-white transition-all active:bg-blue-700 mt-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
