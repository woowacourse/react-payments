import React, { useState } from 'react';
import type { Meta } from '@storybook/react';

import { OwnerNameInput } from '../../components/addCardForm/cardInfoInputs/OwnerNameInput';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

export const OwnerName = () => {
  return (
    <OwnerNameInput viewNextInput={() => {}} viewPreviousInput={() => {}} />
  );
};
