import { Grid } from "@mui/material";
import React from "react";
import CardAdress from "./adressCard/CardAdress";
import "./style.css";
const cards = [
  {
    id: 1,
    title: "Main Office",
    text: " THAGER AL RAFEDAIN GENERAL TRADING LLC Twin Tower _ Office 1504B (15 Floor) Baniyas Road,Deira, Dubai, UAE",
  },
  {
    id: 2,
    title: "Show Room - Dubai",
    text: " THAGER AL RAFEDAIN GENERAL TRADING LLC BUILDING 5 SHOWROOM NO.9 – SATELLITE MARKET – NAKHEEL ROAD, DEIRA, DUBAI, UAE",
  },
  {
    id: 3,
    title: "Sudan branch",
    text: " THAGER AL RAFEDAIN FOR RENEWABLE ENERGY CO.LTD MS BUILDING NO.89,OFFICE NO .404 – AL-KHARTOUM 2, SUDAN",
  },
];

const Address = () => {
  return (
    <div
      className="container offices"
      style={{ backgroundColor: "#1c1c1c", padding: "100px 10%" }}
    >
      {cards.map((el) => (
        <CardAdress key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Address;
