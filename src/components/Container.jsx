import React from "react";

const Container = ({ children, secBg = "" }) => {
  return (
    <section className={secBg}>
      <div className="container mx-auto px-3 py-16">{children}</div>
    </section>
  );
};

export default Container;
