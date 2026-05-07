import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from './Label';

const meta = {
  title: 'Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '입력 폼의 공용 라벨 컴포넌트입니다',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: '입력 폼의 라벨을 넣을 수 있는 children prop입니다',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '카드 번호',
  },
};
