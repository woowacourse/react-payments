import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import CVCNumbers from '../../components/CVCNumbers';
import { useState } from 'react';

const meta: Meta<typeof CVCNumbers> = {
  title: 'Components/CVCNumbers',
  component: CVCNumbers,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'CVC 번호 3자리를 입력받는 컴포넌트입니다. 숫자만 입력할 수 있으며, 입력 검증 기능이 포함되어 있습니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CVCNumbers>;

const Wrapper = () => {
  const [cvcNumbers, setCvcNumbers] = useState('');
  const [error, setError] = useState(false);

  return (
    <CVCNumbers
      cvcNumbers={cvcNumbers}
      setCvcNumbers={setCvcNumbers}
      setCvcError={setError}
    />
  );
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
