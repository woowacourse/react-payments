import React from 'react';
import AddCardForm from '../../AddCardForm/AddCardForm';
import { AddCardFormProvider } from '../../../context/AddCardFormContext';

export default function AddCardPage() {
  return (
    <AddCardFormProvider>
      <AddCardForm />
    </AddCardFormProvider>
  );
}
