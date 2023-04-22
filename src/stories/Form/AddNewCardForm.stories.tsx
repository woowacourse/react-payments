import type { Meta } from '@storybook/react';
import { AddNewCardForm } from '../../components/AddNewCardForm';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Example/Form',
  component: AddNewCardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewCardForm>;

export default meta;

export const RegisterNewCardForm = () => {
  return (
    <BrowserRouter>
      <AddNewCardForm />
    </BrowserRouter>
  );
};
