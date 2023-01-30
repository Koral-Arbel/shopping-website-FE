import React, { useState } from "react";
import "./Registrations.css";

import RegisteredUserFilter from "./RegisteredUserFilter";
import RegisteredUserChart from "./RegisteredUserChart";
import RegisteredUserList from "./RegisteredUserList";

function Registrations(props) {
  const [filteredItem, setFilteredItem] = useState(props.items[0].name);

  const filterChangeHandler = (selectedItem) => {
    setFilteredItem(selectedItem);
  };

  const filteredItemObject = props.items.find((item) => {
    return item.name.toString() === filteredItem.toString();
  });

  const filteredRegisteredUser = props.registeredUsers.filter((user) => {
    return user.itemId === filteredItemObject.id;
  });

  return (
    <div>
      <div className="registrations card">
        <RegisteredUserChart
          registeredUser={props.registeredUser}
          items={props.items}
        />
        <RegisteredUserFilter
          selected={filteredItem}
          items={props.items}
          onChangeFilter={filterChangeHandler}
        />
        <RegisteredUserList
          item={filteredItemObject}
          registeredUser={filteredRegisteredUser}
        />
      </div>
    </div>
  );
}

export default Registrations;
