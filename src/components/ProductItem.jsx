import { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { TiEdit } from "react-icons/ti";
import { ProductContext } from "../contexts/Product";

const ProductItem = ({ product }) => {
  const { image, title, description, price, discount } = product;
  const { deleteProduct, editProduct } = useContext(ProductContext);
  return (
    <tr className="odd:bg-slate-200 even:bg-slate-300">
      <td className="border-2 border-slate-50 max-w-[100px]">
        <img className="w-full object-cover" src={image} alt={title} />
      </td>
      <td className="border-2 border-slate-50">{title}</td>
      <td className="border-2 border-slate-50">
        {description.length > 50
          ? description.slice(0, 50) + "..."
          : description}
      </td>
      <td className="border-2 border-slate-50">${price}</td>
      <td className="border-2 border-slate-50">{discount}</td>
      <td className="border-2 border-slate-50">
        ${Math.floor(price - (price * parseInt(discount)) / 100)}
      </td>
      <td className="border-2 border-slate-50">
        <button
          onClick={() => editProduct(product)}
          className="text-green-500 text-xl"
        >
          <TiEdit />
        </button>
      </td>
      <td className="border-2 border-slate-50">
        <button
          onClick={() => deleteProduct(product.id)}
          className="text-red-500"
        >
          <FaTrashCan />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
