import type { Meta, StoryObj } from '@storybook/react';
import PaymentsFormTitle from '../components/common/PaymentsFormTitle'

const meta = {
  title: 'PaymentsFormTitle',
  component: PaymentsFormTitle,
} satisfies Meta<typeof PaymentsFormTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title이 입력될 영역입니다',
    subTitle: 'subTitle이 입력될 영역입니다',
  },
};
