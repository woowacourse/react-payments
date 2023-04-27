import icon from '../assets/bank/bc-logo.svg';
import Profile from '../components/Common/Profile';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Profile>;

const meta: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
};

export default meta;

export const Default: Story = {
  args: {
    iconUrl: icon,
    name: '이름',
  },
};

export const NoName: Story = {
  args: {
    iconUrl: icon,
  },
};

export const BigSize: Story = {
  args: {
    iconUrl: icon,
    name: '이름',
    size: 60,
  },
};

export const VeryBigSize: Story = {
  args: {
    iconUrl: icon,
    name: '이름',
    size: 160,
  },
};
