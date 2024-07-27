import React from "react";
import { FaPhone, FaMoon } from "react-icons/fa";

const ColorSwitcher = () => {
  const switchColor = () => {
    const phoneNumber = "972524612733";
    const message = "שלום, אני מעוניין לדבר עם סוכן";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank", "noopener noreferrer");
  };

  return (
    <div className="my_switcher d-none d-lg-block">
      <button onClick={switchColor}>
        <span className="setColor dark">
          <FaPhone />
        </span>
        <span className="setColor light">
          <FaMoon />
        </span>
      </button>
    </div>
  );
};

export default ColorSwitcher;
