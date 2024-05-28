import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./../contexts/Cart";

const Nav = () => {
  const {
    cartStates: { cartProducts },
  } = useContext(CartContext);
  return (
    <nav className="flex justify-center gap-4 bg-slate-50 shadow py-3 sticky top-0 z-50">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : ""
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : ""
        }
      >
        <span className="relative">
          <span>Cart</span>{" "}
          {Boolean(cartProducts.length) && (
            <span className="bg-blue-600 w-3.5 h-3.5 inline-flex items-center justify-center text-xs  rounded-full absolute top-0 text-white">
              {cartProducts.length}
            </span>
          )}
        </span>
      </NavLink>
    </nav>
  );
};

export default Nav;
