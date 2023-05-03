import { useState } from "react";
import AddCardPage from "./components/Page/AddCardPage";
import Homepage from "./components/Page/Homepage";
import { LOCAL_STORAGE_CARD_KEY } from "./constant";
import { useCardAction } from "./context/CardContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles/index.css";
import { CardInfo } from "./types";
import { DrawerContextProvider } from "./context/DrawerContext";
import AddNicknamePage from "./components/Page/AddNicknamePage";

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );
  const cardAction = useCardAction();

  const onCardInfoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
      month,
      year,
      owner,
      cvc,
      firstPassword,
      secondPassword,
    } = event.currentTarget;

    cardAction({
      type: "UPDATE_CARD_CONTEXT",
      cardNumber: {
        first: firstCardNumber.value,
        second: secondCardNumber.value,
        third: thirdCardNumber.value,
        fourth: fourthCardNumber.value,
      },
      expiration: {
        month: month.value,
        year: year.value,
      },
      owner: owner.value,
      cvc: cvc.value,
      password: {
        first: firstPassword.value,
        second: secondPassword.value,
      },
    });
    setPageIndex(2);
  };

  return (
    <div className="app">
      {pageIndex === 0 && (
        <Homepage cardList={cardList} onClick={() => setPageIndex(1)} />
      )}
      {pageIndex === 1 && (
        <AddCardPage
          onClick={() => setPageIndex(0)}
          onSubmit={onCardInfoSubmit}
        />
      )}
      {pageIndex === 2 && (
        <AddNicknamePage
          cardList={cardList}
          setCardList={setCardList}
          setPageIndex={setPageIndex}
        />
      )}
    </div>
  );
}
