import type { Meta, StoryObj } from '@storybook/react';
import CardNumbersInput from './CardNumbersInput';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CARD_NUMBER_ERROR } from '../../constants/errorMessage';
import { CardFormProvider } from '../../context/CardFormContext';

const meta: Meta<typeof CardNumbersInput> = {
  title: 'Components/CardNumbersInput',
  component: CardNumbersInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumbersInput>;

const Template = () => {
  return (
    <CardFormProvider>
      <CardNumbersInput />
    </CardFormProvider>
  );
};

export const emptyInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.clear(inputs[1]);
    await userEvent.clear(inputs[2]);
    await userEvent.clear(inputs[3]);

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const invalidCardNumbers: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '4123');

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '5678');

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], '1234');

    await userEvent.clear(inputs[3]);
    await userEvent.type(inputs[3], '7895');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const InvalidCardPrefix: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '60');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(CARD_NUMBER_ERROR.INVALID_CARD_NUMBER);
  },
};

export const InvalidCard_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], 'dkdk');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(CARD_NUMBER_ERROR.NOT_A_NUMBER);
  },
};

export const InvalidCard_TooShort_FirstBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '412');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(`${CARD_NUMBER_ERROR.INVALID_LENGTH}`);
  },
};

export const InvalidCard_TooShort_ThirdBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByPlaceholderText('1234');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '4123');

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '5678');

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], '333');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(`${CARD_NUMBER_ERROR.INVALID_LENGTH}`);
  },
};
