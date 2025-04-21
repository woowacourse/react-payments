import type { Meta, StoryObj } from '@storybook/react';

import { CardInputLayout } from '@/components/common/CardInputLayout';
import { Input } from '@/components/common/Input';

const meta = {
  title: 'common/CardInputLayout',
  component: CardInputLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 등록을 위한 레이아웃 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardInputLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerText: '헤더 텍스트입니다.',
    description: '설명을 담은 description입니다.',
    label: '라벨 값 입니다.',
  },
  render: (args) => {
    return (
      <CardInputLayout {...args}>
        {Array.from({ length: 1 }, (_, i) => (
          <Input
            key={i}
            disabled={true}
            minLength={1}
            maxLength={4}
            placeholder="값을 입력해주세요."
            isValid={true}
          />
        ))}
      </CardInputLayout>
    );
  },
};
