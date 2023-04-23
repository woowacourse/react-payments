import './styles/index.css';

import { FormEvent, useState } from 'react';
import { ADD_CARD_PAGE, HOME_PAGE, LOCAL_STORAGE_CARD_KEY } from './constant';
import { CardInfo, PageInfo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Homepage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';
import { isNumber, isOnlyKoreanAndEnglish } from './utils';

interface cardInputValueInfo {
  card: InputDetailInfo;
  date: InputDetailInfo;
  owner: InputDetailInfo;
  cvc: InputDetailInfo;
  password: InputDetailInfo;
}

interface InputDetailInfo {
  data: string[];
  maxLength: number;
  isRequired: boolean;
  validation: (value: string) => boolean;
}

type InputKind = 'card' | 'cvc' | 'owner' | 'password' | 'date';

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

    const cardInputValue: cardInputValueInfo = {
      card: {
        data: [
          firstCardNumber.value,
          secondCardNumber.value,
          thirdCardNumber.value,
          fourthCardNumber.value,
        ],
        maxLength: 4,
        isRequired: true,
        validation: isNumber,
      },
      date: {
        data: [month.value, year.value],
        maxLength: 2,
        isRequired: true,
        validation: isNumber,
      },
      cvc: {
        data: [cvc.value],
        maxLength: 3,
        isRequired: true,
        validation: isNumber,
      },
      owner: {
        data: [owner.value],
        maxLength: 30,
        isRequired: false,
        validation: isOnlyKoreanAndEnglish,
      },
      password: {
        data: [firstPassword.value, secondPassword.value],
        maxLength: 1,
        isRequired: true,
        validation: isNumber,
      },
    };

    const cardInputKey = ['card', 'cvc', 'owner', 'password', 'date'] as const;

    const validationResult = cardInputKey.every((key: InputKind) => {
      const current = cardInputValue[key];
      const data = current.data;

      const result = data.every((item) => {
        const requiredResult = current.isRequired
          ? item.length === current.maxLength
          : true;
        const validationResult = current.validation(item);

        return requiredResult && validationResult;
      });
      return result;
    });

    console.log(validationResult);

    if (!validationResult) return;

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
