import { Meta, StoryObj } from '@storybook/react';
import CVCNumberInput from '../components/CVCNumberInput';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof CVCNumberInput> = {
  title: 'Components/CVCNumbers Container',
  component: CVCNumberInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CVCNumberInput>;

export const ValidInput: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cvcnumbers-component');
    const input = container.querySelector('input');
    if (!input) return;
    await userEvent.clear(input);
    await userEvent.type(input, '123');
    await waitFor(() => expect((input as HTMLInputElement).value).toBe('123'));
    expect(container.textContent).not.toContain('숫자만 입력 가능합니다.');
  },
};

export const InvalidInput: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cvcnumbers-component');
    const input = container.querySelector('input');
    if (!input) return;
    await userEvent.clear(input);
    await userEvent.type(input, 'abc');
    await waitFor(() =>
      expect(container.textContent).toContain('숫자만 입력 가능합니다.')
    );
    const style = getComputedStyle(input!);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};

export const MixedInput: Story = {
  render: () => <CVCNumberInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cvcnumbers-component');
    const input = container.querySelector('input');
    if (!input) return;
    await userEvent.clear(input);
    await userEvent.type(input, '1a');
    await waitFor(() =>
      expect(container.textContent).toContain('숫자만 입력 가능합니다.')
    );
    const style = getComputedStyle(input);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};
