import React, { useState } from "react";
import "./UserOrder.css";

function UserOrder(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const itemChangeHandler = (event) => {
    var enteredItem = event.target.value;
    setEnteredItem(enteredItem);
    const selectedOrder = props.items.find((item) => {
      return item.name.toString() === enteredItem.toString();
    });
    setEnteredDate(selectedOrder.startDate);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedItemObject = props.items.find((item) => {
      return item.name.toString() === enteredItem.toString();
    });

    const registeredOrderData = {
      userName: enteredUserName,
      OrderId: selectedItemObject.id,
      date: enteredDate,
    };
    props.onSaveRegisteredOrderData(registeredOrderData);

    setEnteredItem("");
    setEnteredItem("");
    setEnteredDate("");
  };

  const itemOptions = props.items.map((item) => {
    return (
      <option key={item.id} value={item.name}>
        {item.displayName}
      </option>
    );
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="new-order-control">
        <div className="new-order-control">
          <label>Item Name</label>
          <input
            type="text"
            value={setEnteredUserName}
            onChange={userNameChangeHandler}
            required
          ></input>
        </div>

        <div className="new-order-control">
          <label>Item Selection</label>
          <select
            className="item-selection"
            onChange={itemChangeHandler}
            defaultValue={""}
            required
          >
            <option value="" disabled>
              Please Choose A Item
            </option>
            {itemOptions}
          </select>
        </div>

        <div className="new-order-control">
          <label>Order Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            disabled
          />
        </div>
      </div>
      <br></br>
      <div className="new-order__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Order Confirmation</button>
      </div>
    </form>
  );
}

export default UserOrder;
