import React from "react";
import { useParams } from "react-router";

const Product = () => {
  const p = useParams();
  console.log(p);
  return <div className="text-4xl text-amber-600">Product :{p.sama}</div>;
};

export default Product;
