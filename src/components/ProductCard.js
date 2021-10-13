import RecipeReviewCard from "./RecipeReviewCard.js";
import Grid from "@mui/material/Grid";

function ProductCard({ product }) {
  return (
    <div className="product-card flex-column">
      <div className="product-image-frame">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RecipeReviewCard product={product} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProductCard;
