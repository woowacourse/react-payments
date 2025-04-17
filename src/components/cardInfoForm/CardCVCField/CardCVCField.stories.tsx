import type { Meta, StoryObj } from '@storybook/react';
import CardCVCField from './CardCVCField';
import { useState } from 'react';

const meta = {
  title: 'CardCVCField',
  component: CardCVCField,
} satisfies Meta<typeof CardCVCField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCVC: '',
    isError: false,
    onChange: () => {},
  },
  render: (args) => {
    const [cardCVC, setCardCVC] = useState('123');
    const [isCardCVCError, setIsCardCVCError] = useState(false);

    const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (value.length > 3) {
        return;
      }

      const isNotValid =
        value.length < 3 || value.length > 3 || Number(value) < 0;

      setIsCardCVCError(isNotValid);
      setCardCVC(value);
    };
    return (
      <CardCVCField
        {...args}
        cardCVC={cardCVC}
        isError={isCardCVCError}
        onChange={onChangeCVC}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardCVC: '',
    isError: true,
    onChange: () => {},
  },
  render: (args) => {
    const [cardCVC, setCardCVC] = useState('12');
    const [isCardCVCError, setIsCardCVCError] = useState(true);

    const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (value.length > 3) {
        return;
      }

      const isNotValid =
        value.length < 3 || value.length > 3 || Number(value) < 0;

      setIsCardCVCError(isNotValid);
      setCardCVC(value);
    };

    return (
      <CardCVCField
        {...args}
        cardCVC={cardCVC}
        isError={isCardCVCError}
        onChange={onChangeCVC}
      />
    );
  },
};
