import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import CVCNumberInput from '../components/CVCNumberInput';
import { ERROR_MESSAGE } from '../utils/cardValidation';

const meta = {
  title: 'Components/CVCNumberInput',
  component: CVCNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CVCNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cvcnumbers-component');

    const input = container.querySelector('input');
    expect(input).toBeDefined();

    expect(input).toHaveAttribute('placeholder', '123');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};

export const InvalidCharacter: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole('textbox');

    await userEvent.click(input);
    await userEvent.type(input, 'abc');
    expect(canvas.getByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeDefined();
  },
};

export const ValidCvc: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole('textbox');

    await userEvent.click(input);
    await userEvent.type(input, '123');
    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};
