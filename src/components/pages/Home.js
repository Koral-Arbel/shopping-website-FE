import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthProvider";
import { testAuthenticatedApi } from "../services/api";
import ItemList from "./ItemList";
// import { CardContent } from "./context/CardProvider";

function Home() {
  const authContext = useContext(AuthContext);
  const [testResponse, setTestResponse] = useState();

  useEffect(() => {
    if (Object.keys(authContext["auth"]).length > 0) {
      testAuthenticatedApi({
        Authorization: "Bearer " + authContext["auth"],
      }).then((res) => {
        setTestResponse(res.data.response);
      });
    }
  }, [authContext]);

  return (
    <>
      <div className="grid">
        <h1>Home</h1>

        <ItemList />

        {Object.keys(authContext["auth"]).length > 0 && <p>{testResponse}</p>}
      </div>
    </>
  );
}

export default Home;
