import Product from "./../Components/Products/Product";
const products = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
const ProductsPage = () => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div className="w-32 bg-amber-300" key={p.name}>
          <Product product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
