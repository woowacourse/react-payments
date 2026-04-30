import type { Meta, StoryObj } from '@storybook/react-vite';
import Label from '../components/Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '카드 번호' },
};

export const ExpiryDate: Story = {
  args: { children: '유효기간' },
};

export const CVC: Story = {
  args: { children: 'CVC' },
};
