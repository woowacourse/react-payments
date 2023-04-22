import type { Meta } from '@storybook/react';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

export const Default = () => (
  <CardPassword
    onInputChange={() => {}}
    changeInputValidation={() => {}}
    values={['', '']}
  ></CardPassword>
);
