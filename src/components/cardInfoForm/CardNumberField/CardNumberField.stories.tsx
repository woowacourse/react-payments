import type { Meta, StoryObj } from '@storybook/react';
import CardNumberField from './CardNumberField';
import useCardNumber from '../../../hooks/useCardNumber';

const meta = {
  title: 'CardNumberField',
  component: CardNumberField,
} satisfies Meta<typeof CardNumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    errorStateList: [false, false, false, false],
    onChange: () => {},
    setInputRef: () => {},
  },
  render: (args) => {
    const {
      cardNumber,
      handleChangeCardNumber,
      errorMessage: cardNumberErrorMessage,
      setInputRef,
    } = useCardNumber();

    return (
      <CardNumberField
        {...args}
        cardNumber={cardNumber}
        errorStateList={cardNumberErrorMessage.map((errorMessage) =>
          Boolean(errorMessage),
        )}
        onChange={handleChangeCardNumber}
        setInputRef={setInputRef}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    errorStateList: [true, true, true, true],
    onChange: () => {},
    setInputRef: () => {},
  },
  render: (args) => {
    return <CardNumberField {...args} />;
  },
};
