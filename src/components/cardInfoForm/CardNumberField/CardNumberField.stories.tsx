import type { Meta, StoryObj } from '@storybook/react';
import CardNumberField from './CardNumberField';
import React, { useState } from 'react';

const meta = {
  title: 'CardNumberField',
  component: CardNumberField,
} satisfies Meta<typeof CardNumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['0', '0', '0', '0'],
    isError: [false, false, false, false],
    onChange: () => {},
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

      // 유효성 검사 setIsError
      const isValid = value.length < 4;
      const copyError = [...isError];
      copyError[n] = isValid;
      setIsError(copyError);

      const copy = [...cardNumber];
      copy[n] = value;
      setCardNumber(copy);
    };

    return (
      <CardNumberField
        {...args}
        cardNumber={cardNumber}
        isError={isError}
        onChange={onChange}
      />
    );
  },
};
export const Error: Story = {
  args: {
    cardNumber: ['0', '0', '0', '0'],
    isError: [false, false, false, false],
    onChange: () => {},
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState(['123', '567', '901', '3456']);
    const [isError, setIsError] = useState([true, true, true, false]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
      const { value } = e.target;

      // 유효성 검사 setIsError
      const isValid = value.length < 4;
      const copyError = [...isError];
      copyError[n] = isValid;
      setIsError(copyError);

      const copy = [...cardNumber];
      copy[n] = value;
      setCardNumber(copy);
    };

    return (
      <CardNumberField
        {...args}
        cardNumber={cardNumber}
        isError={isError}
        onChange={onChange}
      />
    );
  },
};
