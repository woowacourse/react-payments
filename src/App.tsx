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
  data: HTMLInputElement[];
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
          firstCardNumber,
          secondCardNumber,
          thirdCardNumber,
          fourthCardNumber,
        ],
        maxLength: 4,
        isRequired: true,
        validation: isNumber,
      },
      date: {
        data: [month, year],
        maxLength: 2,
        isRequired: true,
        validation: isNumber,
      },
      cvc: {
        data: [cvc],
        maxLength: 3,
        isRequired: true,
        validation: isNumber,
      },
      owner: {
        data: [owner],
        maxLength: 30,
        isRequired: false,
        validation: isOnlyKoreanAndEnglish,
      },
      password: {
        data: [firstPassword, secondPassword],
        maxLength: 1,
        isRequired: true,
        validation: isNumber,
      },
    };

    const cardInputKey = ['card', 'cvc', 'owner', 'password', 'date'] as const;

    const wrongInputs: HTMLInputElement[] = [];

    const validationResult = cardInputKey.every((key: InputKind) => {
      const current = cardInputValue[key];
      const dataList = current.data;

      const result = dataList.every((data) => {
        const requiredResult = current.isRequired
          ? data.value.length === current.maxLength
          : true;
        const validationResult = current.validation(data.value);

        const dataValidationResult = requiredResult && validationResult;

        if (!dataValidationResult) {
          wrongInputs.push(data);
        }

        return dataValidationResult;
      });
      return result;
    });

    if (!validationResult) {
      wrongInputs[0].focus();
      return;
    }

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
