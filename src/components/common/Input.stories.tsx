import type { Meta, StoryObj } from '@storybook/react';
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
  args: { value: '' },
  render: ({ value: _, ...args }) => {
    const [value, setValue] = useState('다람쥐 헌 쳇바퀴 돌듯이');

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
