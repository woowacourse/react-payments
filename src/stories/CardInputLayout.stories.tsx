import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/common/Input';
import { CardInputLayout } from '@/components/features/CardInputLayout';

const meta = {
  title: 'common/CardInputLayout',
  component: CardInputLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof CardInputLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerText: '결제할 카드 번호를 입력해 주세요.',
    description: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
  },
  render: (args) => {
    const [value, _] = useState<string[]>(['', '', '', '']);
    return (
      <CardInputLayout {...args}>
        {Array.from({ length: 4 }, (_, i) => (
          <Input
            key={i}
            value={value[i]}
            minLength={1}
            maxLength={4}
            placeholder="0000"
            isValid={true}
          />
        ))}
      </CardInputLayout>
    );
  },
};
