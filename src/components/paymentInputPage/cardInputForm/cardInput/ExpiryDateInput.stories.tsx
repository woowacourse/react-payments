import type { Meta, StoryObj } from '@storybook/react';
import CardExpiryDateInput from './ExpiryDateInput';
import { expect, userEvent, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';
import { CardProvider } from '../../../../contexts/CardContext';

const meta = {
  title: 'CardExpiryDateInput',
  component: CardExpiryDateInput,
  args: {
    isValid: { month: true, year: true },
    setIsValid: () => {},
  },
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
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
  args: {
    isValid: { month: false, year: true },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');

    await userEvent.type(firstInput, 'aa');

    expect(firstInput.className).toContain(styles.isNotValid);
    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};

export const ErrorYear: Story = {
  args: {
    isValid: { month: true, year: false },
  },

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
  args: {
    isValid: { month: false, year: false },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');
    const secondInput = canvas.getByPlaceholderText('YY');

    await userEvent.type(firstInput, '04');
    await userEvent.type(secondInput, '20');

    expect(firstInput.className).toContain(styles.isNotValid);
    expect(secondInput.className).toContain(styles.isNotValid);
    expect(
      canvas.getByText('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.')
    ).toBeVisible();
  },
};
