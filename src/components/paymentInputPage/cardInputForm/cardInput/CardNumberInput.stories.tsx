import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';
import { userEvent, expect, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  args: {
    cardNumbers: [],
    setCardNumbers: () => {},
  },
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText('1234')[0];

    await userEvent.type(firstInput, 'abc');
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};
