import React from "react";
import { connect } from "react-redux";
import {
  ListItemButton,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buyItems } from "../../store/actions";

const Cart = ({ cart, auth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(auth);

const clearCart  = () => {
  dispatch({type: "CLEAR_CART"});
}

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <List>
        {cart.map((item) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={item.title} secondary={item.department}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {auth ? <Button onClick={() => dispatch(buyItems(cart)) }>Buy</Button> : <Button onClick={() => navigate("/auth")}>Please Log-in to buy</Button>}
      <Button onClick={clearCart}>Clear Cart</Button>
    </div>
  );
};

export default connect((state) => ({
  cart: state.cart,
  auth: state.auth.authData,
}))(Cart);
