import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '@/components/features/CardPreview';

const meta = {
  title: 'features/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 미리보기 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { value: '1234', isValid: true },
      { value: '1234', isValid: true },
      { value: '1234', isValid: true },
      { value: '1234', isValid: true },
    ],
    expireDate: [
      { value: '12', isValid: true },
      { value: '34', isValid: true },
    ],
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
  },

  render: (args) => {
    return <CardPreview {...args} />;
  },
};
