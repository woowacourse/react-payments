import type { Meta } from '@storybook/react';
import { CardRegisterForm } from '../../components/CardRegisterForm';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Example/Form',
  component: CardRegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardRegisterForm>;

export default meta;

export const RegisterNewCardForm = () => {
  return (
    <BrowserRouter>
      <CardRegisterForm />
    </BrowserRouter>
  );
};
