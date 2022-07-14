import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="plan-and-go.us.auth0.com"
    clientId="iopxsqxsruHL1HXkx8iiINsU3ZgyU8Id"
    redirectUri={window.location.origin}
  >
    <Login />
  </Auth0Provider>,
  document.getElementById("root")
);
