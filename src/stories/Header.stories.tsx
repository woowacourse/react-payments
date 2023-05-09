import { Meta, StoryObj } from '@storybook/react';
import Header from '../components/common/Header';
import { LeftArrowIcon } from '../assets/icons';

const meta = {
  title: 'Payment/common/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListHeader: Story = {
  args: {
    title: '보유카드',
  },
};

export const RegistrationHeader: Story = {
  args: {
    title: '카드추가',
    leading: <LeftArrowIcon />,
  },
};
