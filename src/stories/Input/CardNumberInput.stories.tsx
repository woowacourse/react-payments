import React from 'react';

import type { Meta } from '@storybook/react';

import { CardNumberInput } from '../../components/addCardForm/cardInfoInputs/CardNumberInput';
import { useState } from 'react';

const meta = {
  title: 'Example/Input',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  return <CardNumberInput viewNextInput={() => {}} />;
};
