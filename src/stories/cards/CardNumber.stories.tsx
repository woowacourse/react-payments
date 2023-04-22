import { ChangeEvent } from 'react';
import type { Meta } from '@storybook/react';
import CardNumber from '../../components/CardAddForm/CardNumber/CardNumber';
import { CardInputValidation } from '../../types';

const meta = {
  title: 'Payments/Cards/CardNumberInput',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

// export const Default = () => (
//   <CardNumber
//     onChange={({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => {}}
//     handleValidationChange={(key: keyof CardInputValidation, value: boolean) => {}}
//     values={['', '', '', '']}
//   ></CardNumber>
// );
