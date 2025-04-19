import type { Meta, StoryObj } from '@storybook/react';
import CVCInput from './CVCInput';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useState } from 'react';
import ERROR from '../../constants/errorMessage';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';

const meta: Meta<typeof CVCInput> = {
  title: 'Components/CVCInput',
  component: CVCInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  const [CVC, setCVC] = useState('');

  return <CVCInput CVC={CVC} setCVC={setCVC} />;
};

export const emptyInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText('123');

    await userEvent.clear(CVCInput);

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const validInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText('123');

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, '567');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe('');
  },
};

export const Invalid_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText('123');

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, 'ab');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(ERROR.REQUIRE.NUMBER);
  },
};

export const Invalid_NumberLength: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText('123');

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, '12');

    const helperText = canvas.getByTestId('helper-text');
    expect(helperText.textContent).toBe(
      `${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
    );
  },
};
