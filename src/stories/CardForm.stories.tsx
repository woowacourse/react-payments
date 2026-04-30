import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardForm from '../components/CardForm';
import type { CardFormState } from '../types';

const meta = {
  title: 'Components/CardForm',
  component: CardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const emptyState: CardFormState = {
  cardNumberSegments: ['', '', '', ''],
  expiryMonth: '',
  expiryYear: '',
  cvc: '',
};

function Wrapper({ initialState }: { initialState: CardFormState }) {
  const [formState, setFormState] = useState<CardFormState>(initialState);
  return <CardForm formState={formState} setFormState={setFormState} />;
}

export const Empty: Story = {
  render: () => <Wrapper initialState={emptyState} />,
};

export const Filled: Story = {
  render: () => (
    <Wrapper
      initialState={{
        cardNumberSegments: ['1234', '5678', '9012', '3456'],
        expiryMonth: '12',
        expiryYear: '26',
        cvc: '123',
      }}
    />
  ),
};

export const PartiallyFilled: Story = {
  render: () => (
    <Wrapper
      initialState={{
        cardNumberSegments: ['1234', '5678', '', ''],
        expiryMonth: '06',
        expiryYear: '',
        cvc: '',
      }}
    />
  ),
};
