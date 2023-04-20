import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import CardNumbers from './CardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
} satisfies Meta<typeof CardNumbers>;

export default meta;

export const CardNumbersStory = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  return (
    <CardNumbers cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
  );
};
