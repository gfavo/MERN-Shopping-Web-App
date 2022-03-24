import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getItemsByIds } from "../../api";

const UserHistory = ({ profile }) => {
  const [items, setItems] = useState();
  const location = useLocation();

  useEffect(async () => {
    const { data } = await getItemsByIds(profile.result.itemsBought);
    setItems(data);
  }, [location]);

  return (
    <div>
      { profile.result.itemsBought.length > 0 ? (
        items?.map((item) => {
          return (
            <>
              {" "}
              <h2 >{item.name} </h2>{" "}
              <h4>Date Bought: {item.dateBought}</h4>
            </>
          );
        })
      ) : (
        <h1 style={{ textAlign: "center" }}>You didn't buy anything yet :( </h1>
      )}
    </div>
  );
};

export default connect((state) => ({ profile: state.auth.authData }))(
  UserHistory
);
