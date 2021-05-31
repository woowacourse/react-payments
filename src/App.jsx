import React, { useState } from "react";
import { CardAddPage, CardAddCompletion, CardListPage } from "./components";
import { CARD_INFO, checkValidation, getId, getLocalStorage, PAGE, replaceValue, setLocalStorage } from "./utils";
import { LS_KEY } from "./utils";

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

const initialValidation = {
  [CARD_INFO.BACKGROUND_COLOR]: null,
  [CARD_INFO.BANK]: null,
  [CARD_INFO.CARD_NUMBERS]: null,
  [CARD_INFO.EXPIRATION_MONTH]: null,
  [CARD_INFO.EXPIRATION_YEAR]: null,
  [CARD_INFO.OWNER_NAME]: true,
  [CARD_INFO.SECURITY_CODE]: null,
  [CARD_INFO.CARD_PASSWORDS]: null,
  [CARD_INFO.NICKNAME]: true,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);
  const [cardInfos, setCardInfos] = useState(getLocalStorage(LS_KEY.CARD_INFOS) ?? []);
  const [newCardInfo, setNewCardInfo] = useState(initialCardInfo);
  const [validation, setValidation] = useState(initialValidation);

  const addBank = (backgroundColor, bank) => {
    setNewCardInfo({ ...newCardInfo, [CARD_INFO.BACKGROUND_COLOR]: backgroundColor, [CARD_INFO.BANK]: bank });
    setValidation({ ...validation, [CARD_INFO.BACKGROUND_COLOR]: true, [CARD_INFO.BANK]: true });
  };

  const handleInputChange = event => {
    try {
      const { name, value, dataset } = event.target;
      const targetIndex = Number(dataset.index);
      const replacedValue = replaceValue(name, value);
      const newValue = !Number.isNaN(targetIndex)
        ? newCardInfo[name].map((prevValue, index) => (index === targetIndex ? replacedValue : prevValue))
        : replacedValue;

      setNewCardInfo({ ...newCardInfo, [name]: newValue });
      checkValidation(name, newValue);
      setValidation({ ...validation, [name]: true });
    } catch (error) {
      if (error.type === "validation") {
        setValidation({ ...validation, [error.message]: false });

        return;
      }

      console.error(error.message);
    }
  };

  const submitCardInfo = () => {
    const newCardInfos = [...cardInfos, { id: getId(), cardInfo: newCardInfo }];

    setLocalStorage(LS_KEY.CARD_INFOS, newCardInfos);
    setCardInfos(newCardInfos);
    setNewCardInfo(initialCardInfo);
  };

  return (
    <div className="relative max-w-sm h-full p-5 mx-auto flex flex-col">
      {currentPage === PAGE.CARD_ADD && (
        <CardAddPage
          cardInfo={newCardInfo}
          validation={validation}
          addBank={addBank}
          onInputChange={handleInputChange}
          routeToBack={() => setCurrentPage(PAGE.CARD_LIST)}
          routeToNext={() => setCurrentPage(PAGE.CARD_ADD_COMPLETION)}
        />
      )}
      {currentPage === PAGE.CARD_ADD_COMPLETION && (
        <CardAddCompletion
          cardInfo={newCardInfo}
          onInputChange={handleInputChange}
          submitCardInfo={submitCardInfo}
          routeToNext={() => setCurrentPage(PAGE.CARD_LIST)}
        />
      )}
      {currentPage === PAGE.CARD_LIST && (
        <CardListPage cardInfos={cardInfos} routeToNext={() => setCurrentPage(PAGE.CARD_ADD)} />
      )}
    </div>
  );
};

export default App;
