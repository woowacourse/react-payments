import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './NumberInput';
import { userEvent, expect, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';
import { CardProvider } from '../../../../contexts/CardContext';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  args: {
    isValid: [true, true, true, true],
    setIsValid: () => {},
  },
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText('1234')[0];

    await userEvent.type(firstInput, '1523');
    expect(firstInput.className).not.toContain(styles.isNotValid);

    expect(canvas.queryByText('숫자만 입력 가능합니다.')).toBeNull();
  },
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText('1234')[0];

    await userEvent.type(firstInput, 'abc');
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};
