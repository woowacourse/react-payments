import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { ExpirationDateInput } from '../../components/addCardForm/cardInfoInputs/ExpirationDateInput';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  return (
    <ExpirationDateInput
      viewNextInput={() => {}}
      viewPreviousInput={() => {}}
    />
  );
};
