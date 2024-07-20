import React from "react";
import { CartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const customStyle = {
    color: "black",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const { cart } = React.useContext(CartContext);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={customStyle} />
      <span style={customStyle}>{cart}</span>
      </div>
  );
};

export default CartWidgetComponent;
