import ItemsPage from "./components/ItemsPage/itemsPage";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItems from "./components/AddItems/AddItems";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth/Auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserHistory from "./components/UserHistory/UserHistory";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import * as actionTypes from "./constants/actionTypes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.GET_CART });
    dispatch({ type: actionTypes.SET_AUTH_STARTUP });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route element={<ItemsPage />} path="/" />
          <Route element={<AddItems />} path="/addItems" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Auth />} path="/auth" />
          <Route element={<UserHistory />} path="/userHistory" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
