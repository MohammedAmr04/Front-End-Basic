import { useContext } from "react";
import { WishlistContext } from "../../services/contexts/WishlistContext";

const Product = ({ product }) => {
  const { AddProduct } = useContext(WishlistContext);
  function handleAddProduct() {
    AddProduct(product);
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={handleAddProduct}>ADD</button>
    </div>
  );
};

export default Product;
