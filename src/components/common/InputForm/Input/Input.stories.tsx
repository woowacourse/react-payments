import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../../common/inputForm/input/Input';
import { validatorUtils } from '../../../../utils/validationUtils';
import { userEvent, within, expect, waitFor } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';

function checkIsNumber(
  e: React.ChangeEvent<HTMLInputElement>,
  setIsValid: (state: boolean) => void
) {
  const numberString = e.target.value;
  if (!validatorUtils.isNumber(numberString)) {
    setIsValid(false);
    return;
  }
  setIsValid(true);
}

const meta = {
  title: 'Input',
  component: Input,
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Input
        type='test'
        placeholder='숫자를 입력하세요'
        maxLength={3}
        onChange={checkIsNumber}
      />
    );
  },
};

export const ErrorInput: Story = {
  render: () => {
    return (
      <Input
        type='text'
        placeholder='숫자를 입력하세요'
        maxLength={3}
        onChange={checkIsNumber}
      />
    );
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
