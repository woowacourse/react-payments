import type { Meta } from '@storybook/react';
import CardSecurityCode from '../../components/CardAddForm/CardSecurityCode/CardSecurityCode';

const meta = {
  title: 'Payments/Cards/CardSecurityCodeInput',
  component: CardSecurityCode,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

export const Default = () => (
  <CardSecurityCode
    onInputChange={() => {}}
    changeInputValidation={() => {}}
    value=""
  ></CardSecurityCode>
);
