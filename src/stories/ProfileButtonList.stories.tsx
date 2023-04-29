import Dot from '../assets/dot.svg';
import ProfileButtonList from '../components/Common/Profile/ProfileButtonList';
import bankList from '../data/bankList';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ProfileButtonList>;

const meta: Meta<typeof ProfileButtonList> = {
  title: 'ProfileButtonList',
  component: ProfileButtonList,
};

export default meta;

const mockProfileList = new Array(100).fill({ iconUrl: Dot, name: '이름' });

export const ExampleList: Story = {
  args: {
    profileList: mockProfileList,
    getProfileName: () => {},
    profileSize: 37,
    severalPerLine: 8,
  },
};

export const BankList: Story = {
  args: {
    profileList: bankList,
    getProfileName: () => {},
    profileSize: 37,
    severalPerLine: 4,
  },
};
