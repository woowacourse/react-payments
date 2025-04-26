import type { Meta, StoryObj } from '@storybook/react';
import CardInputForm from './CardInputForm';
import { userEvent, within } from '@storybook/test';
import { CardProvider } from '../../../contexts/CardContext';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'CardInputForm',
  component: CardInputForm,
  args: {
    expiryDate: { month: '', year: '' },
    cardCVC: '',
    setExpiryDate: () => {},
    setCardCVC: () => {},
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <CardProvider>
            <CardProvider>
              <Story />
            </CardProvider>
          </CardProvider>
        </BrowserRouter>
      );
    },
  ],
} satisfies Meta<typeof CardInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardNumbersInput = canvas.getAllByPlaceholderText('1234');

    const NUMBERS = ['1234', '5678', '9012', '3456'];
    await userEvent.type(cardNumbersInput[0], NUMBERS[0]);
    await userEvent.type(cardNumbersInput[1], NUMBERS[1]);
    await userEvent.type(cardNumbersInput[2], NUMBERS[2]);
    await userEvent.type(cardNumbersInput[3], NUMBERS[3]);
  },
};
