import React, { useContext, useEffect, useState } from "react";
import AuthContext, { AuthProvider } from "./context/AuthProvider";

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
      <div className="hero">
        <div class="card bg-dark text-white border-0">
          <img
            className="card-img"
            src="/img/bg.webp"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                {" "}
                Koral The collection
              </h5>
              {Object.keys(authContext["auth"]).length > 0 && (
                <p>{testResponse}</p>
              )}
              <p className="card-text lead fs-2">CHECK OUT ALL TEH TRENDS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
