import React from 'react';
import { Card, Text, Title } from '../../components';
import { PAGE } from '../../constants';
import './style.css';

export const CardListPage = (props) => {
  const { setRoute } = props;
  const handleAddButtonClick = () => setRoute(PAGE.ADD_CARD_FORM);

  return (
    <div className="CardListPage">
      <Title>보유카드</Title>
      <button className="Card__AddButton" onClick={handleAddButtonClick}>
        <Card>
          <Text fontSize="1.875rem">+</Text>
        </Card>
      </button>
    </div>
  );
};
