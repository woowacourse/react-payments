import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import PasswordInput from '../components/PasswordInput';
import { ERROR_MESSAGE } from '../utils/cardValidation';

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PasswordInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('password-component');

    const input = container.querySelector('input');
    expect(input).toBeDefined();

    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('placeholder', '**');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};

export const InvalidCharacter: Story = {
  render: () => <PasswordInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText('**');

    await userEvent.click(input);
    await userEvent.type(input, 'ab');
    expect(canvas.getByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeDefined();
  },
};

export const ValidPassword: Story = {
  render: () => <PasswordInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText('**');

    await userEvent.click(input);
    await userEvent.type(input, '12');
    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};
