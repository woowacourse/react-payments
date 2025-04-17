import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardNumberInput from '../components/paymentInputPage/cardInputForm/cardInput/CardNumberInput';
import { userEvent, expect, within } from '@storybook/test';
import styles from '../components/common/inputForm/input/Input.module.css';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  args: {
    setCardNumbers: () => {},
  },
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [cardNumbers, setCardNumbers] = useState<string[]>([
      '1234',
      '1234',
      '1234',
      '1234',
    ]);
    return <CardNumberInput setCardNumbers={setCardNumbers} />;
  },
};

export const Error: Story = {
  render: () => {
    const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
    return <CardNumberInput setCardNumbers={setCardNumbers} />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText('1234')[0];

    await userEvent.type(firstInput, 'abc');
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};
