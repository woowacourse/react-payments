import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';
import {CARD_NUMBER_ERROR} from "../../constants";

const meta: Meta<typeof CardNumberInput> = {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  args: {
    cardNumber: {
      first: '1234',
      second: '5678',
      third: '9101',
      forth: '1213',
    },
    error: {
      first: '',
      second: '',
      third: '',
      forth: '',
    },
  },
};

export const Error: Story = {
  args: {
    cardNumber: {
      first: '1234',
      second: '5678',
      third: '9101',
      forth: '1213',
    },
    error: {
      first: CARD_NUMBER_ERROR.onlyNumbers,
      second: '',
      third: '',
      forth: '',
    },
  },
};
