import type { Meta } from '@storybook/react';
import CardAddForm from '../../components/CardAddForm/CardAddForm';

const meta = {
  title: 'Payments/Cards/CardAddForm',
  component: CardAddForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardAddForm>;

export default meta;

export const Default = () => (
  <CardAddForm
    cardInformation={{
      cardNumber: '',
      expirationDate: {
        month: '',
        year: '',
      },
      ownerName: '',
      securityCode: '',
      password: ['', ''],
    }}
    onSingleInputFieldChange={() => {}}
    onMultipleInputFieldsChange={() => {}}
    handleCardInformationSubmit={() => {}}
  ></CardAddForm>
);
