import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const initialProduct = {
  title: "",
  price: "", // price 0 dile form a age thekei 0 dekha jay, tai ekhane faka diye pore faka ke 0 te convert kora hoyeche
  discount: "",
  image: "",
  description: "",
};
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [editableProduct, setEditableProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  //   Get All Products
  const getProducts = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts(); // Fetching products
  }, []);

  // Track All Input Change & Save all the info into Product State as an Object
  const OnInputChangeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  //  It validates all the data & modify if needed, like price "" to 0, discount something to number%
  const submitForm = (e) => {
    e.preventDefault();

    // console.log(
    //   isNaN(parseInt(product.discount)),
    //   parseInt(product.discount),
    //   product.discount
    // );

    if (
      !product.title ||
      !product.image ||
      !product.description ||
      isNaN(parseInt(product.discount !== "" ? product.discount : 0))
      // parseInt return NaN for "". but I need 0 for ""... & it gives true when disocunt NaN & gives true if "",0, or other numbers, or other numbers with anything like 100%, Anything is removed later.
    ) {
      setIsError(true);
      setMessage("Please Enter All The Fields With Correct Informations...");
      return;
    }

    // console.log(Number(Math.abs(product.price))); "" return 0

    // setProduct({
    //   id: Date.now() + "",
    //   ...product,
    //   price: Number(Math.abs(product.price)),
    //   discount: parseInt(product.discount !== "" ? product.discount : 0) + "%",
    // });

    // evabe(setProduct) korle discount "" thakle updated korar somoy automatic 0 hoy na, karon porer render er jnno snapshot niye rakhe tai notun product create korlam

    const newProduct = {
      id: Date.now() + "",
      ...product,
      price: Number(Math.abs(product.price)),
      discount: parseInt(product.discount !== "" ? product.discount : 0) + "%", // by this line of code discount will be number% & if "" it will be 0%
    };

    // console.log(product);

    editMode ? updateProduct(newProduct) : addProduct(newProduct);
  };

  //   Add New Product
  const addProduct = async (newProduct) => {
    // Ekhane korle abar update er khetre kora lagbe tai submit a kora holo
    // const newProduct = {
    //   id: Date.now() + "",
    //   ...product,
    //   price: Number(Math.abs(product.price)),
    //   discount: parseInt(product.discount !== "" ? product.discount : 0) + "%",
    // }
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      setIsError(false);
      setMessage("Product is Added Successfully");
      setProduct(initialProduct);
    } else {
      setIsError(true);
      setMessage("Failed To Add Product.");
    }
    setIsLoading(false);
    getProducts(); // Re-fetching products
  };

  //   On Edit Mode to Update a Product
  const editProduct = (product) => {
    setEditMode(true);
    setProduct(product);
    setEditableProduct(product);
  };

  //   Update Product
  const updateProduct = async (newProduct) => {
    const id = editableProduct.id;
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      setIsError(false);
      setMessage("Product is Updated Successfully");
      setProduct(initialProduct);
      setEditableProduct(null);
      setEditMode(false);
    } else {
      setIsError(true);
      setMessage("Failed To Update Product.");
    }
    setIsLoading(false);
    getProducts(); // Re-fetching products
  };

  //   Delete Product
  const deleteProduct = async (id) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setIsError(false);
      setMessage("Product is Deleted Successfully");
    } else {
      setIsError(true);
      setMessage("Failed To Delete Product.");
    }
    setIsLoading(false);
    getProducts(); // Re-fetching products
  };

  const contextValue = {
    product,
    products,
    OnInputChangeHandler,
    submitForm,
    editMode,
    editProduct,
    deleteProduct,
    isError,
    message,
    isLoading,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
