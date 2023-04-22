import { ChangeEvent } from 'react';
import type { Meta } from '@storybook/react';
import { CardInputValidation } from '../../types';
import CardSecurityCode from '../../components/CardAddForm/CardSecurityCode/CardSecurityCode';

const meta = {
  title: 'Payments/Cards/CardSecurityCodeInput',
  component: CardSecurityCode,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

export const Default = () => (
  <CardSecurityCode
    onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
    handleValidationChange={(key: keyof CardInputValidation, value: boolean) => {}}
    value=""
  ></CardSecurityCode>
);
