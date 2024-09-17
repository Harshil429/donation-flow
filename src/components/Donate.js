import React, { useState } from "react";

import SecureLogo from "../assets/svgs/secure.svg";
import DonationAmountButton from "./Buttons/DonationAmountButton";
import PaymentMethods from "./PaymentMethods";

const Donate = ({ donationType, setDonationType }) => {
  const donationMonthlyAmount = [6, 12, 18, 30];
  const donationOneTimeAmount = [10, 40, 75, 100];

  const [donationAmount, setDonationAmount] = useState(
    donationType === "monthly"
      ? donationMonthlyAmount[0]
      : donationOneTimeAmount[0]
  );

  const handleDonationAmount = (amount) => {
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value > 0) {
      setDonationAmount(value);
    }
  };

  return (
    <div className="donationCard">
      <div id="main">
        <div>
          I would like to make a{" "}
          {donationType === "once" ? "one-off" : "monthly"} donation of
        </div>
        <div className="donationAmountGroup">
          {(donationType === "monthly"
            ? donationMonthlyAmount
            : donationOneTimeAmount
          ).map((amount) => (
            <DonationAmountButton
              key={amount}
              amount={amount}
              isActive={donationAmount === amount}
              onClick={handleDonationAmount}
            />
          ))}
          <input
            type="number"
            placeholder="&#163; Other amount"
            className="customAmount"
            onChange={handleCustomAmountChange}
            min={1}
          />
          <button className="btnDonate">
            <span>
              Donate &#163;{donationAmount}{" "}
              {donationType === "monthly" ? "monthly" : "today"}
            </span>
            <img src={SecureLogo} alt="Secure" />
          </button>
        </div>
        <div className="caption">
          &#163;{donationAmount}{" "}
          {donationType === "monthly"
            ? "Could help answer an emergency call to our Animal Rescue Line"
            : "Could help an Animal Rescue Team take on an urgent animal rescue"}
        </div>
      </div>
      <div id="footer">
        <div>
          <p
            onClick={() =>
              setDonationType(donationType === "monthly" ? "once" : "monthly")
            }
          >
            I would like to{" "}
            {donationType === "monthly"
              ? "make a one-off donation"
              : "give monthly"}
          </p>
        </div>
        <PaymentMethods donationType={donationType} />
      </div>
    </div>
  );
};

export default Donate;
