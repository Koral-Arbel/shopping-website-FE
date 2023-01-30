import React from "react";
import RegisteredUser from "./RegisteredUser";
import "./RegisteredUserList.css";

function RegisteredUserList(props) {
  if (props.registeredUsers.length === 0) {
    return (
      <h2 className="registrations-list__fallback">No Users Registered</h2>
    );
  }

  return (
    <ul className="registrations-list">
      {props.registeredUsers.map((user) => (
        <RegisteredUser
          key={user.id}
          userName={user.userName}
          item={props.item}
        />
      ))}
    </ul>
  );
}

export default RegisteredUserList;
