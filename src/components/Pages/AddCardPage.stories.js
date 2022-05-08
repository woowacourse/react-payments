import React, { useState } from 'react';
import { PageContext } from '../../context';
import { CardContext } from '../../context';
import { DEFAULT_CARD_INFO } from '../../constants';
import { screen, userEvent } from '@storybook/testing-library';
import { PAGE, DEFAULT_ROUTE_INFO } from '../../constants';
import AddCardPage from './AddCardPage';

export default {
  component: AddCardPage,
  title: 'AddCardPage',
};

function Template() {
  const [cardList, setCardList] = useState({});
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [tempRouter, setTempRouter] = useState(DEFAULT_ROUTE_INFO);
  const [cardInput, setCardInput] = useState(DEFAULT_CARD_INFO);

  const cardState = {
    cardList: cardList,
    setCardList: setCardList,
    cardInput: cardInput,
    setCardInput: setCardInput,
  };

  const pageState = {
    page: page,
    setPage: setPage,
    tempRouter: tempRouter,
    setTempRouter: setTempRouter,
  };

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

  userEvent.type(screen.getByTestId('securityCode'), '555');

  userEvent.type(screen.getByTestId('firstNumber'), '88');
  userEvent.type(screen.getByTestId('secondNumber'), '99');
};
