import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardContent, { CardContentProps } from './CardContent';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import CardRegisterProvider from '../../../../context/CardRegisterContext';
import AddCardButton from '../AddCardButton/AddCardButton';
import { BankNames } from '../../../../types/card.type';

export default {
  title: 'Components/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    bankName: {
      options: ['BC카드', '신한카드'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CardRegisterProvider>
          <Story />
        </CardRegisterProvider>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<CardContentProps> = (args) => <CardContent {...args} />;

export const MultipleCards = ({ bankName }: { bankName: BankNames }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <CardContent
      cardNumber={{ first: '1234', second: '5678', third: '9012', fourth: '3456' }}
      expirationDate={{ month: '12', year: '25' }}
      holderName='John Doe'
      bankName={bankName}
      cvc='123'
      password={{ passwordFirstDigit: '1', passwordSecondDigit: '2' }}
    />
    <CardContent
      cardNumber={{ first: '2345', second: '6789', third: '0123', fourth: '4567' }}
      expirationDate={{ month: '11', year: '26' }}
      holderName='Jane Smith'
      bankName='롯데카드'
      cvc='123'
      password={{ passwordFirstDigit: '1', passwordSecondDigit: '2' }}
    />
    <CardContent
      cardNumber={{ first: '3456', second: '7890', third: '1234', fourth: '5678' }}
      expirationDate={{ month: '10', year: '27' }}
      holderName='Michael Brown'
      bankName='하나카드'
      cvc='123'
      password={{ passwordFirstDigit: '1', passwordSecondDigit: '2' }}
    />
    <CardContent
      cardNumber={{ first: '3456', second: '7890', third: '1234', fourth: '5678' }}
      expirationDate={{ month: '10', year: '27' }}
      holderName='Jason Lee'
      bankName='국민카드'
      cvc='123'
      password={{ passwordFirstDigit: '1', passwordSecondDigit: '2' }}
    />
    <AddCardButton />
  </div>
);
