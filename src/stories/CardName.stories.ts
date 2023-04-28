import { StoryObj } from '@storybook/react';
import CardNameInput from '../components/CardNameInput';

const meta = {
  title: 'CardInput',
  component: CardNameInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardName: Story = {
  args: {
    placeholder: '카드 번호를 입력해 주세요.',
    value: '',
    isAutoFocus: true,
    isRequired: true,
  },
};
