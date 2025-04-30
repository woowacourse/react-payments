import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import NumberInputs from '../components/NumberInputs';
import { ERROR_MESSAGE } from '../utils/cardValidation';

const meta = {
  title: 'Components/NumberInputs',
  component: NumberInputs,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NumberInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('numbers-component');

    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(4);

    expect(inputs[0]).toHaveAttribute('placeholder', '1234');
    expect(inputs[1]).toHaveAttribute('placeholder', '1234');
    expect(inputs[2]).toHaveAttribute('placeholder', '1234');
    expect(inputs[3]).toHaveAttribute('placeholder', '1234');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};

export const InvalidCharacter: Story = {
  render: () => <NumberInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('numbers-component');
    const firstInput = container.querySelector('input')!;

    await userEvent.click(firstInput);
    await userEvent.type(firstInput, 'abcd');
    expect(canvas.getByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeDefined();
  },
};

export const ValidNumber: Story = {
  render: () => <NumberInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('numbers-component');

    const inputs = container.querySelectorAll('input');

    await userEvent.type(inputs[0], '4123');
    await userEvent.type(inputs[1], '4123');
    await userEvent.type(inputs[2], '4123');
    await userEvent.type(inputs[3], '4123');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};
