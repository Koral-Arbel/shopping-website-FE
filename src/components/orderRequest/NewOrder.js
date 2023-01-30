import React, { useState } from "react";

import "./NewOrder.css";
import UserOrder from "./UserOrder";

const NewOrder = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveOrderConfirmationDataHandler = (enteredOrderConfirmationData) => {
    const OrderConfirmationData = {
      ...enteredOrderConfirmationData,
      id: Math.random().toString(),
    };
    props.onAddItem(OrderConfirmationData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-order">
      {!isEditing && (
        <button onClick={startEditingHandler}>Order Confirmation</button>
      )}
      {isEditing && (
        <UserOrder
          items={props.items}
          onSaveOrderConfirmationData={saveOrderConfirmationDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewOrder;
