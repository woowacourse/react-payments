import React from 'react';

import type { Meta } from '@storybook/react';

import { AddNewCardForm } from '../../components/AddNewCardForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const meta = {
  title: 'Example/Form',
  component: AddNewCardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewCardForm>;

export default meta;

export const NewCardForm = () => {
  return (
    <Routes>
      <Route path="/" element={<AddNewCardForm />}></Route>
    </Routes>
  );
};
