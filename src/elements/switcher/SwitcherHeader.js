import React from "react";
import { FaLightbulb, FaMoon, FaPhone } from "react-icons/fa";

const SwitcherHeader = () => {
  const switchColor = () => {
    const phoneNumber = "972524612733";
    const message = "שלום, אני מעוניין לדבר עם סוכן";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener noreferrer");
  };

  return (
    <button onClick={switchColor}>
      <span className="setColor dark">
        <FaPhone />
      </span>
      <span className="setColor light">
        <FaMoon />
      </span>
    </button>
  );
};

export default SwitcherHeader;
