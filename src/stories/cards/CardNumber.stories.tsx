import type { Meta } from '@storybook/react';
import CardNumber from '../../components/CardAddForm/CardNumber/CardNumber';

const meta = {
  title: 'Payments/Cards/CardNumberInput',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

export const Default = () => (
  <CardNumber onInputChange={() => {}} changeInputValidation={() => {}} value=""></CardNumber>
);
