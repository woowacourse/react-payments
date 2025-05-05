import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';
import { userEvent, expect, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';
import { CardProvider } from '../../../../contexts/CardContext';

const meta = {
  title: 'PasswordInput',
  component: PasswordInput,
  args: {
    isPasswordValid: true,
    setIsPasswordValid: () => {},
  },
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPasswordValid: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector('input[name="password"]');

    if (input) {
      await userEvent.type(input, '12');
      expect(input.className).not.toContain(styles.isNotValid);
    }

    expect(canvas.queryByText('12')).toBeNull();
    expect(canvas.queryByText('숫자만 입력 가능합니다.')).toBeNull();
  },
};

export const Error: Story = {
  args: {
    isPasswordValid: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector('input[name="password"]');

    if (input) {
      await userEvent.type(input, 'ab');
      expect(input.className).toContain(styles.isNotValid);
    }

    expect(canvas.queryByText('숫자만 입력 가능합니다.')).not.toBeNull();
  },
};
