import { useContext } from "react";
import { Link } from "react-router";
import { WishlistContext } from "../../services/contexts/WishlistContext";

const Navbar = () => {
  const { productsWish } = useContext(WishlistContext);

  return (
    <header className="bg-gray-300 shadow py-2 px-10">
      <div className="container flex gap-3 w-fit mx-auto ">
        <Link to={"/home"}>home</Link>
        <Link to={"/products"}>products</Link>
        <Link to="/about">about</Link>
      </div>
      <div>products : {productsWish.length}</div>
    </header>
  );
};

export default Navbar;
