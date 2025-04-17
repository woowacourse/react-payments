import type { Meta, StoryObj } from '@storybook/react';
import CardInputSection from './CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import React, { useState } from 'react';

const meta = {
  title: 'CardInputSection',
  component: CardInputSection,
} satisfies Meta<typeof CardInputSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '',
    children: <></>,
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState([
      '1234',
      '5678',
      '9012',
      '3456',
    ]);
    const [isError, setIsError] = useState([false, false, false, false]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
      const { value } = e.target;

      const isValid = value.length < 4;
      const copyError = [...isError];
      copyError[n] = isValid;
      setIsError(copyError);

      const copy = [...cardNumber];
      copy[n] = value.slice(0, 4);
      setCardNumber(copy);
    };

    return (
      <CardInputSection {...args}>
        <CardNumberField
          cardNumber={cardNumber}
          isError={isError}
          onChange={onChange}
        />
      </CardInputSection>
    );
  },
};

export const Error: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '카드 번호는 16자리입니다.',
    children: <></>,
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState(['123', '567', '901', '3456']);
    const [isError, setIsError] = useState([true, true, true, false]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
      const { value } = e.target;

      const isValid = value.length < 4;
      const copyError = [...isError];
      copyError[n] = isValid;
      setIsError(copyError);

      const copy = [...cardNumber];
      copy[n] = value.slice(0, 4);
      setCardNumber(copy);
    };

    return (
      <CardInputSection {...args}>
        <CardNumberField
          cardNumber={cardNumber}
          isError={isError}
          onChange={onChange}
        />
      </CardInputSection>
    );
  },
};
