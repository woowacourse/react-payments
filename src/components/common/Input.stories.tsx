import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const meta = {
  title: 'common/Input',
  component: Input,
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: '다람쥐 헌 쳇바퀴 돌듯이' },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return (
      <>
        <Input {...args} width={30} value={value} onChange={setValue} />
        <Input {...args} width={30} value={value} onChange={setValue} center />
        <Input {...args} width={10} value="width: 10" />
        <Input {...args} width={20} value="width: 20" />
        <Input {...args} width={30} value="width: 30" />
        <Input {...args} width={30} value="" placeholder="당신의 이름을 입력해주세요." />
      </>
    );
  },
};

export const Underlined: Story = {
  ...Default,
  args: { ...Default.args, variant: 'underlined' },
};

export const TypeInteraction: Story = {
  args: {
    value: '',
  },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return <Input {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getAllByRole('textbox').shift()!;
    expect(input).not.toBeUndefined();

    await userEvent.type(input, 'TypeScript is Awesome!');

    expect(input).toHaveValue('TypeScript is Awesome!');
  },
};
