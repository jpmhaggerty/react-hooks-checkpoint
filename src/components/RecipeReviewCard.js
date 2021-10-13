import React, { useEffect, useState } from "react";
//import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

var ProductDetails = React.createContext();

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

async function getProductDetails(productId) {
  let res = await fetch(`http://52.26.193.201:3000/products/${productId}/styles`);
  ProductDetails = await res.json();
  //console.log("Product Details: ", ProductDetails);
}

export default function RecipeReviewCard({ product }) {
  const [expanded, setExpanded] = React.useState(false);
  const [url, setUrl] = React.useState();

  const handleExpandClick = (event) => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getProductDetails(product.id);
    if (ProductDetails.results) {
      setUrl(ProductDetails.results[0].photos[0].url)
    }
  }, [handleExpandClick]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            New
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader={new Date(Date.now()).toDateString()}
      />
      <Typography paragraph>Product More Info 1</Typography>
      <Typography paragraph>Product More Info 2</Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={(event) => handleExpandClick(event)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{product.name}</Typography>
          <CardMedia
            component="img"
            height="194"
            image={url}
            alt={product.name}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
