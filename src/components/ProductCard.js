import BasicCard from './MuiCard.js'

function ProductCard({ product }) {
  console.log("Productcard: ", product);
  return (
    <div className="product-card flex-column">
      <div className="product-image-frame">
        <BasicCard />
        <img alt="product image" className="product-image" src={product.url} />
      </div>
      <div className="product-name">{product.name}</div>
    </div>
  );
}

export default ProductCard;