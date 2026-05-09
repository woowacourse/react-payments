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
    cardPreviewInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cardCompanyId: null,
    },
    cardFormHandlers: {
      handleCardNumbersChange: fn(),
      handleExpiryMonthChange: fn(),
      handleExpiryYearChange: fn(),
      handleCardCompanyChange: fn(),
    },
    onRegisterComplete: fn(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
      cardCompanyId: null,
    },
  },
};

export const Filled: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: 'bc',
    },
  },
};

export const Interactive: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cardCompanyId: null,
    },
    cardFormHandlers: {
      handleCardNumbersChange: fn(),
      handleExpiryMonthChange: fn(),
      handleExpiryYearChange: fn(),
      handleCardCompanyChange: fn(),
    },
    onRegisterComplete: fn(),
  },
  render: function InteractiveInfoInputSection(args) {
    const [cardNumbers, setCardNumbers] = useState(
      args.cardPreviewInfo.cardNumbers,
    );
    const [expiryMonth, setExpiryMonth] = useState(
      args.cardPreviewInfo.expiryMonth,
    );
    const [expiryYear, setExpiryYear] = useState(
      args.cardPreviewInfo.expiryYear,
    );
    const [cardCompanyId, setCardCompanyId] = useState<CardCompanyId | null>(
      args.cardPreviewInfo.cardCompanyId,
    );

    return (
      <InfoInputSection
        {...args}
        cardPreviewInfo={{
          cardNumbers,
          expiryMonth,
          expiryYear,
          cardCompanyId,
        }}
        cardFormHandlers={{
          handleCardNumbersChange: setCardNumbers,
          handleExpiryMonthChange: setExpiryMonth,
          handleExpiryYearChange: setExpiryYear,
          handleCardCompanyChange: setCardCompanyId,
        }}
      />
    );
  },
};
