import { useEffect } from 'react';

import type { Meta } from '@storybook/react';

import { AddNewCardForm } from '../../components/addCardForm';
import { BrowserRouter } from 'react-router-dom';
import { useCardInfoActionContext } from '../../hooks/cardInfoContext';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Form',
  component: AddNewCardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewCardForm>;

export default meta;

export const CardForm = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <AddNewCardFormAfterSelectCompanyId />
      </CardInfoProvider>
    </BrowserRouter>
  );
};

const AddNewCardFormAfterSelectCompanyId = () => {
  const { setCompanyId } = useCardInfoActionContext();

  useEffect(() => {
    setCompanyId('HANA');
  }, [setCompanyId]);

  return <AddNewCardForm />;
};
