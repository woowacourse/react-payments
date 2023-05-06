import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { initialCardRegisterInfo } from '../../../reducer/cardRegister/cardRegisterReducer';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CreditCard: Story = {
  args: {
    type: 'card',
    ...initialCardRegisterInfo,
  },
};
