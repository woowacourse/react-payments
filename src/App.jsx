import React, { useState } from "react";
import { CardAddPage, CardAddCompletion } from "./components";
import { CARD_INFO, PAGE } from "./utils";

const initialCardInfo = {
  [CARD_INFO.BACKGROUND_COLOR]: "",
  [CARD_INFO.BANK]: "",
  [CARD_INFO.CARD_NUMBERS]: ["", "", "", ""],
  [CARD_INFO.EXPIRATION_MONTH]: "",
  [CARD_INFO.EXPIRATION_YEAR]: "",
  [CARD_INFO.OWNER_NAME]: "",
  [CARD_INFO.SECURITY_CODE]: "",
  [CARD_INFO.CARD_PASSWORDS]: ["", ""],
  [CARD_INFO.NICKNAME]: "",
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_ADD_COMPLETION);
  const [newCardInfo, setNewCardInfo] = useState(initialCardInfo);

  return (
    <div className="relative max-w-sm h-full p-5 mx-auto flex flex-col justify-between">
      {currentPage === PAGE.CARD_ADD && (
        <CardAddPage
          cardInfo={newCardInfo}
          setCardInfo={setNewCardInfo}
          routeTo={() => setCurrentPage(PAGE.CARD_ADD_COMPLETION)}
        />
      )}
      {currentPage === PAGE.CARD_ADD_COMPLETION && (
        <CardAddCompletion
          cardInfo={newCardInfo}
          setCardInfo={setNewCardInfo}
          routeTo={() => setCurrentPage(PAGE.CARD_LIST)}
        />
      )}
    </div>
  );
};

export default App;
