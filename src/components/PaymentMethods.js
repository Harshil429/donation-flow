import React from "react";

import DirectDebitLogo from "../assets/images/direct-debit-1-logo-png-transparent.png";
import FundRaisingRegulatorLogo from "../assets/images/fundraising-regulator-logo.png";
import MasterCardLogo from "../assets/images/mastercard-logo.png";
import PayPalLogo from "../assets/images/paypal-logo.png";
import VisaLogo from "../assets/images/visa-logo.png";

const PaymentMethods = ({ donationType }) => (
  <div className={donationType === "monthly" ? "directDebitCard" : "visaGroup"}>
    {donationType === "monthly" ? (
      <>
        <span>
          All Direct Debits are protected by the Direct Debit Guarantee.
        </span>
        <div>
          <img src={DirectDebitLogo} alt="Direct Debit" />
          <img src={FundRaisingRegulatorLogo} alt="Fundraising Regulator" />
        </div>
      </>
    ) : (
      <>
        <img src={VisaLogo} alt="Visa" />
        <img src={MasterCardLogo} alt="MasterCard" />
        <img src={PayPalLogo} alt="PayPal" />
        <img src={FundRaisingRegulatorLogo} alt="Fundraising Regulator" />
      </>
    )}
  </div>
);
export default PaymentMethods;
