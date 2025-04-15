import type { Meta, StoryObj } from '@storybook/react';
import { CardInputLayout } from '../components/features/CardInputLayout';
import { Input } from '../components/common/Input';
import { useState } from 'react';

const meta = {
  title: 'common/CardInputLayout',
  component: CardInputLayout,
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
    const [value, _] = useState<number[]>([0, 0, 0, 0]);
    return (
      <CardInputLayout {...args}>
        {Array.from({ length: 4 }, (_, i) => (
          <Input
            key={i}
            value={value[i - 1]}
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
