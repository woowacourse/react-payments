import { Meta, StoryObj } from '@storybook/react';
import CardPeriodInput from './CardPeriodInput';

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
    errorState: {
      month: false,
      year: false,
    },
  },
};

export const ErrorMonth: Story = {
  args: {
    cardExpirationDate: {
      month: '22',
      year: '26',
    },
    errorState: {
      month: true,
      year: false,
    },
  },
};

export const ErrorYear: Story = {
  args: {
    cardExpirationDate: {
      month: '12',
      year: '22',
    },
    errorState: {
      month: false,
      year: true,
    },
  },
};
