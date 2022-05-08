import React, { useState, useReducer, useEffect } from 'react';
import { PageContext } from '../../context';
import { CardContext } from '../../context';
import { DEFAULT_CARD_INFO } from '../../constants';
import { screen, userEvent } from '@storybook/testing-library';
import { PAGE, DEFAULT_ROUTE_INFO, DISPATCH_TYPE } from '../../constants';
import AddCardPage from './AddCardPage';

export default {
  component: AddCardPage,
  title: 'AddCardPage',
};

const cardInputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DISPATCH_TYPE.CHANGE_CARD_NUMBER: {
      const { key, cardNumber } = payload;
      return {
        ...state,
        cardNumber: { ...state.cardNumber, [`${key}`]: cardNumber },
      };
    }
    case DISPATCH_TYPE.CHANGE_EXPIRATION_DATE: {
      const { key, date } = payload;
      return {
        ...state,
        expirationDate: { ...state.expirationDate, [`${key}`]: date },
      };
    }
    case DISPATCH_TYPE.CHANGE_OWNER_NAME: {
      const { ownerName } = payload;
      return {
        ...state,
        ownerName,
      };
    }
    case DISPATCH_TYPE.CHANGE_SECURITY_CODE: {
      const { securityCode } = payload;
      return {
        ...state,
        securityCode: securityCode,
      };
    }
    case DISPATCH_TYPE.CHANGE_PASSWORD: {
      const { key, password } = payload;
      return {
        ...state,
        password: { ...state.password, [`${key}`]: password },
      };
    }
    case DISPATCH_TYPE.CHANGE_CARD_DESIGNATION: {
      const { cardDesignation } = payload;
      return {
        ...state,
        cardDesignation: cardDesignation,
      };
    }
    case DISPATCH_TYPE.RESET: {
      return { ...payload };
    }

    default:
      throw new Error();
  }
};

function Template() {
  const [cardList, setCardList] = useState({});
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [tempRouter, setTempRouter] = useState(DEFAULT_ROUTE_INFO);
  const [cardInput, cardInputDispatch] = useReducer(cardInputReducer, DEFAULT_CARD_INFO);

  const cardState = {
    cardList: cardList,
    setCardList: setCardList,
    cardInput: cardInput,
    cardInputDispatch: cardInputDispatch,
  };

  const pageState = {
    page: page,
    setPage: setPage,
    tempRouter: tempRouter,
  };

  useEffect(() => {
    if (page === PAGE.ADD_CARD) {
      setTempRouter({ addCard: 'app', completeAddCard: 'app hide', cardList: 'app hide' });
    }
    if (page === PAGE.COMPLETE_ADD_CARD) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app', cardList: 'app hide' });
    }
    if (page === PAGE.CARD_LIST) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app hide', cardList: 'app' });
    }
  }, [page]);

  return (
    <PageContext.Provider value={pageState}>
      <CardContext.Provider value={cardState}>
        <AddCardPage />
      </CardContext.Provider>
    </PageContext.Provider>
  );
}

export const DefaultAddCardPage = Template.bind({});

DefaultAddCardPage.play = () => {
  userEvent.type(screen.getByTestId('firstColumn'), '1111');
  userEvent.type(screen.getByTestId('secondColumn'), '2222');
  userEvent.type(screen.getByTestId('thirdColumn'), '3333');
  userEvent.type(screen.getByTestId('forthColumn'), '4444');

  userEvent.type(screen.getByTestId('month'), '08');
  userEvent.type(screen.getByTestId('year'), '22');

  userEvent.type(screen.getByTestId('ownerName'), 'Harry');

  userEvent.type(screen.getByTestId('securityCode'), '123');

  userEvent.type(screen.getByTestId('firstNumber'), '88');
  userEvent.type(screen.getByTestId('secondNumber'), '99');
};
