import React from "react";
import { Link, Outlet } from "react-router";

const ProductPage = () => {
  return (
    <div>
      <h1>product Page</h1>
      <nav>
        {" "}
        <ul className="bg-teal-400 ">
          <li>
            {/* products/1 */}
            {/*  /1 */}
            <Link to={"1"}> product 1 </Link>
            <Link to={"2"}> product 2</Link>
            <Link to={"3"}> product 3 </Link>
            <Link to={"4"}> product 4 </Link>
            <Link to={"5"}> product 5</Link>
          </li>
          <li>
            <Link to={"about"}> about </Link>
          </li>
        </ul>{" "}
      </nav>

      <div>{<Outlet />}</div>
    </div>
  );
};

export default ProductPage;
