import { useCallback, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ExpiryDateInputs from '../components/ExpiryDateInputs';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof ExpiryDateInputs> = {
  title: 'Components/ExpiryDate Container',
  component: ExpiryDateInputs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpiryDateInputs>;

const Wrapper = () => {
  const [period, setPeriod] = useState<string[]>(['', '']);
  const handlePeriodChange = useCallback((newPeriod: string[]) => {
    setPeriod(newPeriod);
  }, []);
  const [isPeriodSeparatorShowing, setIsPeriodSeparatorShowing] =
    useState<boolean>(false);

  return (
    <>
      <ExpiryDateInputs
        period={period}
        handlePeriodChange={handlePeriodChange}
        showPeriodSeparator={() => setIsPeriodSeparatorShowing(true)}
        hidePeriodSeparator={() =>
          setIsPeriodSeparatorShowing(period.some((p) => p !== ''))
        }
      />
      {isPeriodSeparatorShowing && <div data-testid="separator">/</div>}
    </>
  );
};

export const ValidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');
    const inputs = container.querySelectorAll('input');
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
    const separator = await canvas.findByTestId('separator');
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
