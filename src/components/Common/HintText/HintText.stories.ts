import type { Meta, StoryObj } from '@storybook/react-vite';

import HintText from './HintText';

const meta = {
  title: 'HintText',
  component: HintText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '입력 폼의 공용 힌트 텍스트 컴포넌트입니다',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: '입력 폼의 힌트 텍스트를 넣을 수 있는 children prop입니다',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof HintText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '본인 명의의 카드만 결제 가능합니다.',
  },
};
