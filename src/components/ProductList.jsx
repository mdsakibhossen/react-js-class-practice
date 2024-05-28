import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../contexts/Product";

const ProductList = () => {
  const { products, isError, message, isLoading } = useContext(ProductContext);

  if (isLoading) {
    return (
      <main className="grid place-items-center h-[80vh]">
        <h2 className="text-4xl">Loading...</h2>
      </main>
    );
  }
  return (
    <div className="product-list">
      {products.length ? (
        <>
          <h2 className="text-xl md:text-3xl text-center font-medium mb-5">
            Products
          </h2>
          <small
            className={`${
              isError ? "text-red-400" : "text-green-400"
            } inline-block mb-2 font-medium text-sm`}
          >
            {message && message}
          </small>
          <div className="products overflow-x-auto pb-1">
            <table className="w-full table-auto text-center min-w-min">
              <thead>
                <tr>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Image
                  </th>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Title
                  </th>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Description
                  </th>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Price
                  </th>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Discount
                  </th>
                  <th className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300">
                    Discounted Price
                  </th>
                  <th
                    colSpan={2}
                    className="px-2 py-1 font-medium odd:bg-slate-300 even:bg-slate-200 border-2 border-slate-300"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl md:text-4xl">
          No Products are Available...
        </h2>
      )}
    </div>
  );
};

export default ProductList;
