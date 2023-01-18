import React from "react";
import React, { createContext, useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function AuthContext() {
  const { isAuthenticated } = useContext(AuthContext);
  const AuthContext = createContext();
  return (
    <div>
      {isAuthenticated ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

export default AuthContext;
