import React from "react";
import { Navigate } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import useToken from "../hooks/useToken";

function Signin() {
  const token = useToken();

  if (token !== null) {
    return <Navigate to="/" />;
  }
  return <SigninContainer />;
}

export default Signin;
