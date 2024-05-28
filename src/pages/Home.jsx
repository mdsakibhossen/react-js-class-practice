import React from "react";
import Container from "../components/Container";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-[3] lg:order-2">
          <ProductForm />
        </div>
        <div className="flex-[5] lg:order-1">
          <ProductList />
        </div>
      </div>
    </Container>
  );
};

export default Home;
