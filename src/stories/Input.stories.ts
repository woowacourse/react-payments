import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
  },
};

export const OwnerInput: Story = {
  args: {
    label: '카드 소유자 이름',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요',
  },
};
