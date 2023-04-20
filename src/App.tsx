import { FormEvent, useState } from "react";
import AddCardPage from "./components/AddCardPage";
import Homepage from "./components/Homepage";
import { LOCAL_STORAGE_CARD_KEY } from "./constant";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles/index.css";
import { CardInfo } from "./types";
export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  const onCardInfoSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    const newCard: CardInfo = {
      cardNumber: {
        fisrt: firstCardNumber.value,
        second: secondCardNumber.value,
        third: thirdCardNumber.value,
        fourth: fourthCardNumber.value,
      },
      expiracy: {
        month: month.value,
        year: year.value,
      },
      owner: owner.value,
      cvc: cvc.value,
      password: {
        first: firstPassword.value,
        second: secondPassword.value,
      },
    };

    const updatedCardList = [...cardList, newCard];
    setCardList(updatedCardList);
    setPageIndex(0);
  };

  return (
    <div className="app">
      {pageIndex === 0 && (
        <Homepage cardList={cardList} onClick={() => setPageIndex(1)} />
      )}
      {pageIndex === 1 && <AddCardPage onSubmit={onCardInfoSubmit} />}
    </div>
  );
}
