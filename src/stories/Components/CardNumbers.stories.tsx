import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import CardNumbers from '../../components/CardNumbers';
import { useState } from 'react';
import { CardNumber } from '../../types';

const meta: Meta<typeof CardNumbers> = {
  title: 'Components/CardNumbers',
  component: CardNumbers,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 번호 4칸을 입력받는 컴포넌트입니다. 숫자만 입력할 수 있으며, 유효성 검사 기능을 포함하고 있습니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardNumbers>;

const Wrapper = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [error, setError] = useState(false);

  return (
    <CardNumbers
      cardNumbers={cardNumbers}
      setCardNumbers={setCardNumbers}
      setCardNumbersError={setError}
    />
  );
};

export const ValidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cardnumbers-component');
    const inputs = container.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
      await userEvent.clear(inputs[i]);
      await userEvent.type(inputs[i], '1234');
      expect((inputs[i] as HTMLInputElement).value).toBe('1234');
    }

    await waitFor(() =>
      expect(container.textContent).not.toContain('숫자만 입력 가능합니다.')
    );
  },
};

export const InvalidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cardnumbers-component');
    const firstInput = container.querySelectorAll('input')[0];

    await userEvent.clear(firstInput);
    await userEvent.type(firstInput, 'abcd');

    await waitFor(() =>
      expect(container.textContent).toContain('숫자만 입력 가능합니다.')
    );

    const style = getComputedStyle(firstInput);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};

export const MixedInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cardnumbers-component');
    const inputs = container.querySelectorAll('input');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '1234');
    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '12ab');

    await waitFor(() =>
      expect(container.textContent).toContain('숫자만 입력 가능합니다.')
    );

    const style1 = getComputedStyle(inputs[0]);
    const style2 = getComputedStyle(inputs[1]);
    expect(style1.borderColor).not.toBe('rgb(255, 0, 0)');
    expect(style2.borderColor).toBe('rgb(255, 0, 0)');
  },
};
