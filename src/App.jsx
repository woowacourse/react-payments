import React, { useState } from "react";
import { CardAddForm } from "./components";

const initialCardInfo = {
  backgroundColor: "",
  bank: "",
  cardNumbers: ["", "", "", ""],
  expirationDate: {
    month: "",
    year: "",
  },
  ownerName: "",
  securityCode: "",
  cardPasswords: ["", ""],
};

const App = () => {
  const [newCardInfo] = useState(initialCardInfo);

  return (
    <div className="max-w-sm h-full p-5 mx-auto flex flex-col justify-between">
      <CardAddForm cardInfo={newCardInfo} />
    </div>
  );
};

export default App;
