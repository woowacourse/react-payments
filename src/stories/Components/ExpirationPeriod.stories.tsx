import { Meta, StoryObj } from '@storybook/react';
import ExpirationPeriod from '../../components/ExpirationPeriod';
import { useState, useRef } from 'react';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof ExpirationPeriod> = {
  title: 'Components/ExpirationPeriod',
  component: ExpirationPeriod,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 유효기간(MM/YY)을 입력하는 폼입니다. 숫자만 입력할 수 있고, 올바른 월/년 검증을 지원합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExpirationPeriod>;

type Period = {
  month: string;
  year: string;
};

const Wrapper = () => {
  const [period, setPeriod] = useState<Period>({
    month: '',
    year: '',
  });
  const [error, setError] = useState(false);
  const separatorRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ExpirationPeriod
        period={period}
        setPeriod={setPeriod}
        separatorRef={separatorRef}
        setExpirationPeriodError={setError}
      />
      <div data-testid='separator' ref={separatorRef}></div>
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
    expect(container.textContent).not.toContain(
      '올바른 유효기간을 입력하세요.'
    );
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
