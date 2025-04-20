import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../../common/inputForm/input/Input';
import { userEvent, within, expect, waitFor } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';

const meta = {
  title: 'Input',
  component: Input,
  args: {
    handleInputChange: () => {},
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    name: 'test',
    placeholder: '숫자를 입력하세요',
    maxLength: 3,
    isValidInput: true,
  },
};

export const ErrorInput: Story = {
  args: {
    type: 'text',
    name: 'test',
    placeholder: '숫자를 입력하세요',
    maxLength: 3,
    isValidInput: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('숫자를 입력하세요');

    await userEvent.type(input, 'abc');
    expect(input.className).toContain(styles.isNotValid);

    await userEvent.clear(input);
    await userEvent.type(input, '123');
    await waitFor(() =>
      expect(input.className).not.toContain(styles.isNotValid)
    );
  },
};
