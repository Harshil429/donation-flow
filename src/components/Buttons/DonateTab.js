import React from "react";

const DonateTab = ({ type, currentType, onClick }) => {
  const isActive = currentType === type;

  return (
    <button
      onClick={onClick}
      className={`btnTab ${isActive ? "active" : ""} ${
        currentType === "once" ? "donateOnceActive" : ""
      }`}
    >
      Donate {type}
    </button>
  );
};

export default DonateTab;
