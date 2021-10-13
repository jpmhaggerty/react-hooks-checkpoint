import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function handleClick(event) {
  alert("something to say")
}

export default function BasicCard({product}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" component="div">
          {product.slogan}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2">
          {product.category}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(event) => {handleClick(event)}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
