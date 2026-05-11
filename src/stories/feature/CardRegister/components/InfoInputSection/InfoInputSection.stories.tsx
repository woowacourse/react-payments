import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import InfoInputSection from '../../../../../feature/CardRegister/components/InfoInputSection/InfoInputSection';
import type { CardCompanyId } from '../../../../../common/types/CardPreview';

const meta = {
  title: 'feature/CardRegister/components/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    cardFormInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cvcNumber: '',
      cardCompanyId: null,
      password: '',
    },
    cardFormHandlers: {
      handleCardNumbersChange: fn(),
      handleExpiryMonthChange: fn(),
      handleExpiryYearChange: fn(),
      handleCardCompanyChange: fn(),
      handleCvcNumberChange: fn(),
      handlePasswordNumberChange: fn(),
    },
    currentStep: 0,
    hasFormError: true,
    onRegisterComplete: fn(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardFormInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
      cvcNumber: '',
      cardCompanyId: null,
      password: '',
    },
    currentStep: 1,
    hasFormError: true,
  },
};

export const Filled: Story = {
  args: {
    cardFormInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cvcNumber: '123',
      cardCompanyId: 'bc',
      password: '12',
    },
    currentStep: 5,
    hasFormError: false,
  },
};

export const Interactive: Story = {
  args: {
    cardFormInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cvcNumber: '',
      cardCompanyId: null,
      password: '',
    },
    cardFormHandlers: {
      handleCardNumbersChange: fn(),
      handleExpiryMonthChange: fn(),
      handleExpiryYearChange: fn(),
      handleCardCompanyChange: fn(),
      handleCvcNumberChange: fn(),
      handlePasswordNumberChange: fn(),
    },
    currentStep: 5,
    hasFormError: true,
    onRegisterComplete: fn(),
  },
  render: function InteractiveInfoInputSection(args) {
    const [cardNumbers, setCardNumbers] = useState(
      args.cardFormInfo.cardNumbers,
    );
    const [expiryMonth, setExpiryMonth] = useState(
      args.cardFormInfo.expiryMonth,
    );
    const [expiryYear, setExpiryYear] = useState(
      args.cardFormInfo.expiryYear,
    );
    const [cvcNumber, setCvcNumber] = useState(args.cardFormInfo.cvcNumber);
    const [cardCompanyId, setCardCompanyId] = useState<CardCompanyId | null>(
      args.cardFormInfo.cardCompanyId,
    );
    const [password, setPassword] = useState(args.cardFormInfo.password);

    return (
      <InfoInputSection
        {...args}
        cardFormInfo={{
          cardNumbers,
          expiryMonth,
          expiryYear,
          cvcNumber,
          cardCompanyId,
          password,
        }}
        cardFormHandlers={{
          handleCardNumbersChange: setCardNumbers,
          handleExpiryMonthChange: setExpiryMonth,
          handleExpiryYearChange: setExpiryYear,
          handleCardCompanyChange: setCardCompanyId,
          handleCvcNumberChange: setCvcNumber,
          handlePasswordNumberChange: setPassword,
        }}
      />
    );
  },
};
