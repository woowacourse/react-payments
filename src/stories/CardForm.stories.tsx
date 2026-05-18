import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardForm from '../components/CardRegister/CardForm';
import type { CardFormState } from '../types';

const emptyState: CardFormState = {
  cardNumberSegments: ['', '', '', ''],
  cardCompany: '',
  expiryMonth: '',
  expiryYear: '',
  cvc: '',
  cardPassword: '',
};

const meta = {
  title: 'Components/CardForm',
  component: CardForm,
  tags: ['autodocs'],
  args: {
    formState: emptyState,
    setFormState: () => {},
    brand: undefined,
  },
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialState }: { initialState: CardFormState }) {
  const [formState, setFormState] = useState<CardFormState>(initialState);
  return <CardForm formState={formState} setFormState={setFormState} brand={undefined} />;
}

export const Empty: Story = {
  render: () => <Wrapper initialState={emptyState} />,
};

export const Filled: Story = {
  render: () => (
    <Wrapper
      initialState={{
        cardNumberSegments: ['1234', '5678', '9012', '3456'],
        cardCompany: '신한카드',
        expiryMonth: '12',
        expiryYear: '26',
        cvc: '123',
        cardPassword: '12',
      }}
    />
  ),
};

export const PartiallyFilled: Story = {
  render: () => (
    <Wrapper
      initialState={{
        cardNumberSegments: ['1234', '5678', '', ''],
        cardCompany: '',
        expiryMonth: '06',
        expiryYear: '',
        cvc: '',
        cardPassword: '',
      }}
    />
  ),
};
