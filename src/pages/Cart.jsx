import React, { useContext } from "react";
import Container from "../components/Container";
import { CartContext } from "../contexts/Cart";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    cartStates: { cartProducts },
    dispatch,
  } = useContext(CartContext);

  let totalPrice = 0;
  cartProducts.forEach((el) => {
    const price = el.price;
    const discount = parseInt(el.discount);
    const discountedPrice = Math.floor(price - (price * discount) / 100);
    const subTotal = discountedPrice * el.quantity;
    totalPrice += subTotal;
  });

  /* *************** Complex Logic Start(Calculating Total Price with Reduce Array Method(reduce())) *************** */
  // let totalPrice = cartProducts.reduce(
  //   (acc, curVal) =>
  //     acc +
  //     Math.floor(
  //       (curVal.price - (curVal.price * parseInt(curVal.discount)) / 100) *
  //         curVal.quantity
  //     ),
  //   0
  // );
  /* *************** Complex Logic End *************** */

  if (!cartProducts.length) {
    return (
      <Container>
        <p className="text-lg md:text-3xl text-center">
          No Products are Added to the Cart
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="header text-center mb-5">
        <h2 className="text-xl md:text-3xl font-medium mb-2">
          Your Products
        </h2>
        <p>One More Step to Buy</p>
      </div>
      <div className="overflow-x-auto pb-1">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Image
              </th>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Title
              </th>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Price
              </th>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Quantity
              </th>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Sub-Total
              </th>
              <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </tbody>
          <tfoot className="bg-slate-300">
            <tr>
              <td colSpan={6} className="text-center">
                <span className="font-medium inline-block py-1.5">
                  Total Price:{" "}
                </span>
                <span> ${totalPrice}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="btn text-center md:text-start mt-5">
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="bg-slate-300 px-3 py-1 rounded hover:bg-slate-500 hover:text-slate-200 transition-all"
        >
          Clear Cart
        </button>
      </div>
    </Container>
  );
};

export default Cart;
