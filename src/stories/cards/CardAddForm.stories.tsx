import { ChangeEvent, FormEvent } from 'react';
import type { Meta } from '@storybook/react';
import CardAddForm from '../../components/CardAddForm/CardAddForm';

const meta = {
  title: 'Payments/Cards/CardAddForm',
  component: CardAddForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardAddForm>;

export default meta;

// export const Default = () => (
//   <CardAddForm
//     cardInformation={{
//       cardNumber: ['', '', '', ''],
//       expirationDate: {
//         month: '',
//         year: '',
//       },
//       ownerName: '',
//       securityCode: '',
//       password: ['', ''],
//     }}
//     onCardNumberChange={({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => {}}
//     onOwnerNameChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
//     onExpirationDateChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
//     onSecurityCodeChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
//     onPasswordChange={({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => {}}
//     onCardInformationSubmit={(event: FormEvent<HTMLFormElement>) => {}}
//   ></CardAddForm>
// );
