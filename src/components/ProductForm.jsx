import React, { useContext } from "react";
import { ProductContext } from "../contexts/Product";

const ProductForm = () => {
  const {
    product: { title, price, discount, image, description },
    OnInputChangeHandler,
    submitForm,
    isError,
    message,
    editMode,
  } = useContext(ProductContext);

  return (
    <div className="form-box max-w-[700px] mx-auto w-full mb-5">
      <h2 className="text-xl md:text-3xl text-center font-medium mb-5">
        Product Form
      </h2>
      <form action="" onSubmit={submitForm}>
        <small
          className={`${
            isError ? "text-red-400" : "text-green-400"
          } inline-block mb-2 font-medium text-sm lg:hidden`}
        >
          {message && message}
        </small>
        <div className="single mb-3">
          <label
            htmlFor="title"
            className="text-slate-500 font-medium mb-0.5 inline-block"
          >
            Title:
          </label>
          <input
            type="text"
            className="outline-none border-2 focus:border-blue-500 rounded px-3 py-1.5 w-full"
            placeholder="Product Title"
            name="title"
            onChange={OnInputChangeHandler}
            value={title}
          />
        </div>
        <div className="single flex flex-col lg:flex-row gap-3 mb-3">
          <div>
            <label
              htmlFor="price"
              className="text-slate-500 font-medium mb-0.5 inline-block"
            >
              Price:
            </label>
            <input
              type="number"
              className="outline-none border-2 focus:border-blue-500 rounded px-3 py-1.5 w-full md:flex-[3] "
              placeholder="Product Price"
              name="price"
              onChange={OnInputChangeHandler}
              value={price}
            />
          </div>
          <div>
            <label
              htmlFor="discount"
              className="text-slate-500 font-medium mb-0.5 inline-block"
            >
              Discount:
            </label>
            <input
              type="text"
              className="outline-none border-2 focus:border-blue-500 rounded px-3 py-1.5 w-full"
              placeholder="Product Discount: 30%"
              name="discount"
              onChange={OnInputChangeHandler}
              value={discount}
            />
          </div>
        </div>
        <div className="single mb-3">
          <label
            htmlFor="image"
            className="text-slate-500 font-medium mb-0.5 inline-block"
          >
            Image:
          </label>
          <input
            type="url"
            className="outline-none border-2 focus:border-blue-500 rounded px-3 py-1.5 w-full"
            placeholder="Product Image Link"
            name="image"
            onChange={OnInputChangeHandler}
            value={image}
          />
        </div>
        <div className="single mb-3">
          <label
            htmlFor="description"
            className="text-slate-500 font-medium mb-0.5 inline-block"
          >
            Description:
          </label>
          <textarea
            className="outline-none border-2 focus:border-blue-500 rounded px-3 py-1.5 w-full resize-none"
            placeholder="Product Description"
            rows="5"
            name="description"
            onChange={OnInputChangeHandler}
            value={description}
          ></textarea>
        </div>
        <div className="btn-box text-center">
          <button
            className={`${
              editMode
                ? "bg-green-300 hover:bg-green-500 hover:text-white active:bg-green-700"
                : "bg-blue-300 hover:bg-blue-500 hover:text-white active:bg-blue-700"
            } px-5 py-1.5 rounded  transition-all  mt-3`}
          >
            {editMode ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
