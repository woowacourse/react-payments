import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CVCNumbers from '../components/CVCNumbers';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof CVCNumbers> = {
  title: 'Components/CVCNumbers Container',
  component: CVCNumbers,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CVCNumbers>;

const Wrapper: React.FC = () => {
  const [cvcNumbers, setCvcNumbers] = useState<string[]>(['']);
  return <CVCNumbers cvcNumbers={cvcNumbers} setCvcNumbers={setCvcNumbers} />;
};

export const ValidInput: Story = {
  render: () => <Wrapper />,
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
  render: () => <Wrapper />,
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
  render: () => <Wrapper />,
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
