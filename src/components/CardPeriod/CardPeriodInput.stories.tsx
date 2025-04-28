import { Meta, StoryObj } from '@storybook/react';
import CardPeriodInput from './CardPeriodInput';
import {CARD_EXPIRATION_ERROR} from "../../constants";

const meta = {
  title: 'Components/CardPeriodInput',
  component: CardPeriodInput,
  argTypes: {
    onChange: { action: 'changed' },
    cardExpirationDate: {
      control: 'object',
    },
    'cardExpirationDate.month': {
      control: { type: 'text' },
      description: '만료 월(MM)',
    },
    'cardExpirationDate.year': {
      control: { type: 'text' },
      description: '만료 년도(YY)',
    },
    errorState: {
      control: 'object',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof CardPeriodInput>;

export default meta;

type Story = StoryObj<typeof CardPeriodInput>;

export const Default: Story = {
  args: {
    cardExpirationDate: {
      month: '',
      year: '',
    },
    error: {
      month: '',
      year: '',
    },
  },
};

export const ErrorMonth: Story = {
  args: {
    cardExpirationDate: {
      month: '22',
      year: '26',
    },
    error: {
      month: CARD_EXPIRATION_ERROR.invalidMonth,
      year: '',
    },
  },
};

export const ErrorYear: Story = {
  args: {
    cardExpirationDate: {
      month: '12',
      year: '22',
    },
    error: {
      month: '',
      year: CARD_EXPIRATION_ERROR.invalidYear,
    },
  },
};
