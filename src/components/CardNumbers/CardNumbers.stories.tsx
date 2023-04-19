import React, { useRef } from 'react';
import { Meta } from '@storybook/react';
import CardNumbers from './CardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
} satisfies Meta<typeof CardNumbers>;

export default meta;

export const CardNumbersStory = () => {
  const cardNumberRefs = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  return <CardNumbers refs={cardNumberRefs} />;
};
