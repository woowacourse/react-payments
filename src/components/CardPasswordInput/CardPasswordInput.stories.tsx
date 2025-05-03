import type { Meta, StoryObj } from '@storybook/react';
import { CardFormProvider } from '../../context/CardFormContext';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardPasswordInput from './CardPasswordInput';
import { PASSWORD_ERROR } from '../../constants/errorMessage';

const meta: Meta<typeof CardPasswordInput> = {
  title: 'Components/CardPasswordInput',
  component: CardPasswordInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardPasswordInput>;

const Template = () => {
  return (
    <CardFormProvider>
      <CardPasswordInput />
    </CardFormProvider>
  );
};

export const emptyInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText('비밀번호 앞 2자리');

    await userEvent.clear(passwordInput);

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const validInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText('비밀번호 앞 2자리');

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, '12');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const Invalid_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText('비밀번호 앞 2자리');

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, '1a');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(PASSWORD_ERROR.NOT_A_NUMBER);
  },
};

export const Invalid_TooLong: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText('비밀번호 앞 2자리');

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, '1');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(PASSWORD_ERROR.INVALID_LENGTH);
  },
};
