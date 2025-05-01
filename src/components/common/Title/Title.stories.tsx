import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '@/components';

const meta = {
  title: 'Components/Common/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '제목과 부가 설명을 표시하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '결제할 카드 번호를 입력해 주세요',
  },
};

export const WithDescription: Story = {
  args: {
    children: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
  },
};
