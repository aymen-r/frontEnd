import { Grid } from "@mui/material";
import React from "react";
import CardAdress from "./adressCard/CardAdress";
import "./style.css";

const Address = () => {
  return (
    <div
      className="container offices"
      style={{ backgroundColor: "#1c1c1c", padding: "100px 10%" }}
    >
      <CardAdress />
      <CardAdress />
      <CardAdress />
    </div>
  );
};

export default Address;
