import { StoryObj } from '@storybook/react';
import Header from '../components/common/Header';

const meta = {
  title: 'Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MyCardHeader: Story = {
  args: {
    title: '보유 카드',
    goToMainPage: false,
  },
};

export const AddCardHeader: Story = {
  args: {
    title: '카드 추가',
    goToMainPage: true,
  },
};
