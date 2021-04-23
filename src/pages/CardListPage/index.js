import React from 'react';
import { Card, Text, Title } from '../../components';
import './style.css';

export const CardListPage = () => {
  return (
    <div className="CardListPage">
      <Title>보유카드</Title>
      <div className="Card--wrapper">
        <Card>
          <Text fontSize="1.875rem">+</Text>
        </Card>
      </div>
    </div>
  );
};
