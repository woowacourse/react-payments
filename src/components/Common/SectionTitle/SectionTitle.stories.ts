import type { Meta, StoryObj } from '@storybook/react-vite';

import SectionTitle from './SectionTitle';

const meta = {
  title: 'SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '입력 폼의 공용 타이틀 컴포넌트입니다',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    children: { 
      control: 'text', 
      description: '입력 폼의 타이틀을 넣을 수 있는 children prop입니다',
        table: {                                                                                                                            
        type: { summary: 'string' },
      },   },
    
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '결제할 카드 번호를 입력해 주세요',
  },
};
