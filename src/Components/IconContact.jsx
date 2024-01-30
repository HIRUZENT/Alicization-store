import React from "react";
import icon_1 from "./Images/icon_1.png";
import './Header.css';
const IconContact = () => {
  const phoneNumber = "6289606230316";
  const message = "Hallo kak!";
  const encodeMessage = encodeURI(message);
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

  return (
    <div className="iconHeader">
      <a target="_blank" className="iconContact" rel="noppener noreferrer" href={whatsAppUrl}>
        <img src={icon_1} alt="IconKecil" />
      </a>
    </div>
  );
};
export default IconContact;