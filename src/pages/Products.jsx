import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { ProductContext } from "../contexts/Product";

const Products = () => {
  const { products, isLoading } = useContext(ProductContext);
  if (isLoading) {
    return (
      <Container>
        <main className="grid place-items-center h-[80vh]">
          <h2 className="text-4xl">Loading...</h2>
        </main>
      </Container>
    );
  }
  return (
    <Container>
      {products.length > 1 ? (
        <>
          <h2 className="text-4xl text-center">Products</h2>
          <div
            className="products mt-10 grid gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(18rem,1fr))",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl md:text-4xl">No Products are Available...</h2>
      )}
    </Container>
  );
};

export default Products;
