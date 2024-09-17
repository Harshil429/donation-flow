import React, { useState } from "react";
import Donate from "./components/Donate";
import DonateTab from "./components/Buttons/DonateTab";

const donationTypes = ["monthly", "once"];

const App = () => {
  const [donationType, setDonationType] = useState(donationTypes[0]);

  return (
    <div className="container">
      <div className="tabGroup">
        {donationTypes.map((type) => (
          <DonateTab
            key={type}
            type={type}
            currentType={donationType}
            onClick={() => setDonationType(type)}
          />
        ))}
      </div>
      <Donate donationType={donationType} setDonationType={setDonationType} />
    </div>
  );
};

export default App;
