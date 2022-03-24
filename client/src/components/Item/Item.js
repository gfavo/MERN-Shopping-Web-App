import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addItemToCart } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function Item({ item }) {
  const dispatch = useDispatch();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>R${numberWithCommas(item.price)},00</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addItemToCart(item))}>
          Add To cart
        </Button>
      </CardActions>
    </Card>
  );
}
