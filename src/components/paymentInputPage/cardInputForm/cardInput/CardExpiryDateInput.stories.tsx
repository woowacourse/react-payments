import type { Meta, StoryObj } from '@storybook/react';
import CardExpiryDateInput from './CardExpiryDateInput';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';
import { useState } from 'react';

const meta = {
  title: 'CardExpiryDateInput',
  component: CardExpiryDateInput,
  args: {
    expiryDate: { month: '', year: '' },
    isValid: { month: true, year: true },
    setExpiryDate: () => {},
    setIsValid: () => {},
  },

  render: () => {
    const [expiryDate, setExpiryDate] = useState({ month: '', year: '' });
    const [isValid, setIsValid] = useState({ month: true, year: true });
    return (
      <CardExpiryDateInput
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    );
  },
} satisfies Meta<typeof CardExpiryDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');
    const secondInput = canvas.getByPlaceholderText('YY');

    await userEvent.type(firstInput, '12');
    await userEvent.type(secondInput, '25');

    expect(firstInput.className).not.toContain(styles.isNotValid);
    expect(canvas.queryByText('숫자만 입력 가능합니다.')).toBeNull();
  },
};

export const ErrorMonth: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');

    await userEvent.type(firstInput, 'aa');

    expect(firstInput.className).toContain(styles.isNotValid);
    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};

export const ErrorYear: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');
    const secondInput = canvas.getByPlaceholderText('YY');

    await userEvent.type(firstInput, '04');
    await userEvent.type(secondInput, 'yy');

    expect(secondInput.className).toContain(styles.isNotValid);
    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};

export const ErrorDuration: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');
    const secondInput = canvas.getByPlaceholderText('YY');

    await userEvent.type(firstInput, '04');
    await userEvent.type(secondInput, '20');
    ErrorDuration.args = {
      ...ErrorDuration.args,
      expiryDate: { month: '04', year: '20' },
      isValid: { month: false, year: false },
    };

    expect(firstInput.className).toContain(styles.isNotValid);
    expect(secondInput.className).toContain(styles.isNotValid);
    expect(
      canvas.getByText('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.')
    ).toBeVisible();
  },
};
