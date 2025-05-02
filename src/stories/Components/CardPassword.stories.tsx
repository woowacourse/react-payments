import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardPassword from '../../components/CardPassword';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta: Meta<typeof CardPassword> = {
  title: 'Components/CardPassword',
  component: CardPassword,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 비밀번호 앞 2자리를 입력하는 컴포넌트입니다. 숫자만 입력할 수 있고, 문자를 입력하면 에러가 발생합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardPassword>;

const Wrapper = () => {
  const [passwordNumbers, setPasswordNumbers] = useState('');
  return (
    <CardPassword
      passwordNumbers={passwordNumbers}
      setPasswordNumbers={setPasswordNumbers}
      setPasswordError={() => {}}
    />
  );
};

export const ValidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cardpassword-component');
    const input = container.querySelector('input');
    if (!input) return;
    await userEvent.clear(input);
    await userEvent.type(input, '12');
    await waitFor(() => expect(input).toHaveValue('12'));
    expect(container.textContent).not.toContain('숫자 2자리를 입력해주세요.');
  },
};

export const InvalidInput: Story = {
  render: () => <Wrapper />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('cardpassword-component');
    const input = container.querySelector('input');
    if (!input) return;
    await userEvent.clear(input);
    await userEvent.type(input, 'abc');
    await waitFor(() =>
      expect(container.textContent).toContain('숫자 2자리를 입력해주세요.')
    );
    const style = getComputedStyle(input);
    expect(style.borderColor).toBe('rgb(255, 0, 0)');
  },
};
