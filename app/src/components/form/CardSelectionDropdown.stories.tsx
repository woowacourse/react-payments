import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { CardContext } from '../../context/CardContext';
import type { CardCompany } from '../../context/CardContext';
import { CardSelectionDropdown } from './CardSelectionDropdown';

const meta = {
  title: 'CardSelectionDropdown',
  component: CardSelectionDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSelect: () => {},
  },
} satisfies Meta<typeof CardSelectionDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardCompany, setCardCompany] = useState<CardCompany>('');
  return (
    <CardContext
      value={{
        cardNumber: ['', '', '', ''],
        setCardNumber: () => {},
        cardExpiryDate: { 'expiry-month': '', 'expiry-year': '' },
        setCardExpiryDate: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword: '',
        setCardPassword: () => {},
        cardCompany,
        setCardCompany,
        networkBrand: '',
      }}
    >
      <CardSelectionDropdown onSelect={() => {}} />
    </CardContext>
  );
};

export const Base: Story = {
  render: renderWithContext,
};

export const OpenDropdown: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);
  },
};

export const SelectOption: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);
    const option = canvas.getByText('BC카드');
    await userEvent.click(option);
  },
};
