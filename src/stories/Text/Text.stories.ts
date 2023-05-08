import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/common/Text';

const meta = {
  title: 'Text/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UniversalText: Story = {
  args: {
    children: '다람쥐 헌 쳇바퀴 돌듯이',
  },
};
