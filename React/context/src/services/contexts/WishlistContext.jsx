import { createContext, useContext, useState } from "react";

export const WishlistContext = createContext({});

export function WishlistProvider({ children }) {
  const [productsWish, setProductsWish] = useState([]);
  function AddProduct(product) {
    setProductsWish((prev) => [...prev, product]);
  }

  return (
    <WishlistContext.Provider value={{ productsWish, AddProduct }}>
      {children}
    </WishlistContext.Provider>
  );
}
