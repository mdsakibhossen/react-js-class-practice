import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { IoCloseSharp } from "react-icons/io5";

const CartItem = ({ product }) => {
  const { id, image, title, price, discount, quantity } = product;
  const { dispatch } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const discountedPrice = Math.floor(
    price - (price * parseInt(discount)) / 100
  );
  // console.log(quantity);
  const changeQuantityHandler = (e, value) => {
    // console.log(
    //   Number(e.target.value),
    //   typeof Number(e.target.value),
    //   Boolean(Number(e.target.value)) // NaN - falsey
    // );

    // console.log(e.target.tagName); // BUTTON or INPUT

    /* *************** Complex Logic Start *************** */

    if (e.target.tagName === "BUTTON") {
      if (quantity + value >= 1) {
        dispatch({
          type: "MODIFY_CART_PRODUCT_QUANTITY",
          payload: { id: id, quantity: quantity + value },
        });
        setProductQuantity(quantity + value);
      }
    } else {
      if (value >= 1 && Number(value)) {
        dispatch({
          type: "MODIFY_CART_PRODUCT_QUANTITY",
          payload: { id: id, quantity: Number(value) },
        });
        setProductQuantity(Number(value));
      }
    }
    /* *************** Complex Logic End *************** */
  };
  return (
    <tr className="odd:bg-slate-200 even:bg-slate-300">
      <td className="border-2 border-slate-50  max-w-[100px]">
        <img className="w-full object-cover" src={image} alt={title} />
      </td>
      <td className="border-2 border-slate-50">{title}</td>
      <td className="border-2 border-slate-50">${discountedPrice}</td>
      <td className="border-2 border-slate-50">
        <div className="max-w-24 mx-auto grid grid-cols-3 border border-slate-400 rounded-sm">
          <button onClick={(e) => changeQuantityHandler(e, -1)}>&minus;</button>
          <input
            type="text"
            value={productQuantity}
            className="w-full outline-none"
            onChange={(e) => changeQuantityHandler(e, e.target.value)}
          />
          <button onClick={(e) => changeQuantityHandler(e, 1)}>+</button>
        </div>
      </td>
      <td className="border-2 border-slate-50">
        ${discountedPrice * quantity}
      </td>
      <td className="border-2 border-slate-50">
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: id })
          }
          className="text-2xl hover:text-blue-500"
        >
          <IoCloseSharp />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
