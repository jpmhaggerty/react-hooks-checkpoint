import ProductCard from "./ProductCard.js";
function ProductBox({ products }) {
  console.log("Products: ", products)
  if (!Array.isArray(products)) {
    return <></>;
  }
  return (
    <div className="product-box flex-row">
      {products.map((product, index) => (
        <ProductCard product={product} key={product.name + index} />
      ))}
    </div>
  );
}

export default ProductBox;