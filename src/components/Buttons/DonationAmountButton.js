import React from "react";

import SelectedLogo from "../../assets/svgs/selected.svg";

const DonationAmountButton = ({ amount, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(amount)}
      className={`btnAmount ${isActive ? "active" : ""}`}
    >
      <span className="amountText"> &#163;{amount}</span>
      {isActive && <img src={SelectedLogo} alt="Selected" />}
    </button>
  );
};

export default DonationAmountButton;
