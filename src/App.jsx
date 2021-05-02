import React, { useState } from "react";
import { CardAddForm } from "./components";
import { CARD_INFO } from "./utils";

const initialCardInfo = {
  [CARD_INFO.BACKGROUND_COLOR]: "",
  [CARD_INFO.BANK]: "",
  [CARD_INFO.CARD_NUMBERS]: ["", "", "", ""],
  [CARD_INFO.EXPIRATION_MONTH]: "",
  [CARD_INFO.EXPIRATION_YEAR]: "",
  [CARD_INFO.OWNER_NAME]: "",
  [CARD_INFO.SECURITY_CODE]: "",
  [CARD_INFO.CARD_PASSWORDS]: ["", ""],
};

const App = () => {
  const [newCardInfo, setNewCardInfo] = useState(initialCardInfo);

  return (
    <div className="relative max-w-sm h-full p-5 mx-auto flex flex-col justify-between">
      <CardAddForm cardInfo={newCardInfo} setCardInfo={setNewCardInfo} />
    </div>
  );
};

export default App;
