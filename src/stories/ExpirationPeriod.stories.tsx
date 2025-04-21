import { useState, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ExpirationPeriodInputs from '../components/ExpirationPeriodInputs';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof ExpirationPeriodInputs> = {
  title: 'Components/ExpirationPeriod Container',
  component: ExpirationPeriodInputs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpirationPeriodInputs>;

const Wrapper = () => {
  const [period, setPeriod] = useState<string[]>(['', '']);
  const separatorRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ExpirationPeriodInputs
        period={period}
        setPeriod={setPeriod}
        separatorRef={separatorRef}
      />
      <div data-testid="separator" ref={separatorRef}></div>
    </>
  );
};

export const ValidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');
    const inputs = container.querySelectorAll('input');
    const separator = await canvas.findByTestId('separator');
    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '05');
    await waitFor(() =>
      expect((inputs[0] as HTMLInputElement).value).toBe('05')
    );
    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '23');
    await waitFor(() =>
      expect((inputs[1] as HTMLInputElement).value).toBe('23')
    );
    expect(separator.textContent).toBe('/');
    expect(container.textContent).not.toContain('올바른 유효기간을 입력하세요');
  },
};

export const InvalidMonth: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');
    const inputs = container.querySelectorAll('input');
    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '13');
    await waitFor(() =>
      expect(container.textContent).toContain('올바른 유효기간을 입력하세요.')
    );
    const style = getComputedStyle(inputs[0]);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};

export const InvalidYear: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');
    const inputs = container.querySelectorAll('input');
    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '2');
    await waitFor(() =>
      expect(container.textContent).toContain('올바른 유효기간을 입력하세요.')
    );
    const style = getComputedStyle(inputs[1]);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};

export const MixedInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');
    const inputs = container.querySelectorAll('input');
    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '11');
    await waitFor(() =>
      expect((inputs[0] as HTMLInputElement).value).toBe('11')
    );
    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], 'a');
    await waitFor(() =>
      expect(container.textContent).toContain('숫자만 입력 가능합니다.')
    );
    const style0 = getComputedStyle(inputs[0]);
    const style1 = getComputedStyle(inputs[1]);
    expect(style0.borderColor).not.toBe('rgb(255, 0, 0)');
    expect(style1.borderColor).toBe('rgb(255, 0, 0)');
  },
};
