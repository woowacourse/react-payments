import type { Meta, StoryObj } from '@storybook/react';
import CardNumbersInput from './CardNumbersInput';
import { useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import ERROR from '../../constants/errorMessage';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';

const meta: Meta<typeof CardNumbersInput> = {
  title: 'Components/CardNumbersInput',
  component: CardNumbersInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumbersInput>;

const Template = () => {
  const [cardNumbers, setCardNumbers] = useState(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill('')
  );
  return (
    <CardNumbersInput
      cardNumbers={cardNumbers}
      setCardNumbers={setCardNumbers}
    />
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
    expect(helperText.textContent).toBe(ERROR.CARD_NUMBER.INVALID);
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
    expect(helperText.textContent).toBe(ERROR.REQUIRE.NUMBER);
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
    expect(helperText.textContent).toBe(
      `${CARD_VALIDATION_INFO.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
    );
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
    expect(helperText.textContent).toBe(
      `${CARD_VALIDATION_INFO.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
    );
  },
};
