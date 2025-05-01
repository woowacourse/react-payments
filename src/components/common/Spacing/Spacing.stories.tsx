import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from '@/components';

const meta = {
  title: 'Components/Common/Spacing',
  component: Spacing,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '컴포넌트 간의 간격을 조절하는 컴포넌트입니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#f5f5f5', padding: '20px' }}>
        <div style={{ background: '#fff', padding: '10px' }}>상단 컨텐츠</div>
        <Story />
        <div style={{ background: '#fff', padding: '10px' }}>하단 컨텐츠</div>
      </div>
    ),
  ],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 8,
  },
};

export const Medium: Story = {
  args: {
    size: 16,
  },
};

export const Large: Story = {
  args: {
    size: 24,
  },
};
