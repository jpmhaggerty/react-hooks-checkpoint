import ProductCard from "./ProductCard.js";

function ProductBox({ products }) {
  if (!Array.isArray(products)) {
    return <></>;
  }
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard product={product} key={product.name + index} />
      ))}
    </div>
  );
}

export default ProductBox;