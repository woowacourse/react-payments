import type { Meta, StoryObj } from '@storybook/react';
import CardExpiryInput from './CardExpiryInput';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { EXPIRYDATE_ERROR } from '../../constants/errorMessage';
import { CardFormProvider } from '../../context/CardFormContext';

const meta: Meta<typeof CardExpiryInput> = {
  title: 'Components/CardExpiryInput',
  component: CardExpiryInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardExpiryInput>;

const Template = () => {
  return (
    <CardFormProvider>
      <CardExpiryInput />
    </CardFormProvider>
  );
};

export const emptyInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.clear(yearInput);

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const validInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '12');
    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, '25');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const InvalidMonth_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, 'ab');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(EXPIRYDATE_ERROR.MONTH_IS_NOT_A_NUMBER);
  },
};

export const InvalidMonth_TooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '1');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(
      `${EXPIRYDATE_ERROR.INVALID_MONTH_LENGTH_ERROR}`
    );
  },
};

export const InvalidYear_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '12');

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, 'ㅁㅁ');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(EXPIRYDATE_ERROR.YEAR_IS_NOT_A_NUMBER);
  },
};

export const InvalidYear_TooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '12');

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, '2');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(
      `${EXPIRYDATE_ERROR.INVALID_YEAR_LENGTH_ERROR}`
    );
  },
};
