import type { Meta, StoryObj } from '@storybook/react';
import CVCInput from './CVCInput';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CVC_ERROR } from '../../constants/errorMessage';
import { CardFormProvider } from '../../context/CardFormContext';

const meta: Meta<typeof CVCInput> = {
  title: 'Components/CVCInput',
  component: CVCInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <CardFormProvider>
      <CVCInput />
    </CardFormProvider>
  );
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
    expect(helperText.textContent).toBe(CVC_ERROR.NOT_A_NUMBER);
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
    expect(helperText.textContent).toBe(`${CVC_ERROR.INVALID_LENGTH}`);
  },
};
