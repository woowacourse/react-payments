import './styles/index.css';

import { FormEvent, useState } from 'react';
import { ADD_CARD_PAGE, HOME_PAGE, LOCAL_STORAGE_CARD_KEY } from './constant';
import { CardInfo, PageInfo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Homepage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';

export default function App() {
  const [pageIndex, setPageIndex] = useState<PageInfo>(HOME_PAGE);
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
    setPageIndex(HOME_PAGE);
  };

  return (
    <div className="app">
      {pageIndex === HOME_PAGE && (
        <Homepage
          cardList={cardList}
          onClick={() => setPageIndex(ADD_CARD_PAGE)}
        />
      )}
      {pageIndex === ADD_CARD_PAGE && (
        <AddCardPage
          onClick={() => setPageIndex(HOME_PAGE)}
          onSubmit={onCardInfoSubmit}
        />
      )}
    </div>
  );
}
