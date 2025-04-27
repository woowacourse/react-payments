import type { Meta, StoryObj } from '@storybook/react';
import CardPasswordInput from './CardPasswordInput';
import { userEvent, expect, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';

const meta = {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
  args: {
    isValid: true,
    setIsValid: () => {},
  },
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isValid: true,
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
    isValid: false,
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
