import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/common/Header/Header';
import { HashRouter } from 'react-router-dom';

type Story = StoryObj<typeof Header>;

const meta = {
  title: 'Header',
  component: Header,
  decorators: [
    Story => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

export const Standard: Story = {
  args: {
    title: '뒤로가기 버튼이 있는 헤더?',
    hasBackButton: true,
  },
};

export const NoBackButton: Story = {
  args: {
    title: '뒤로가기 버튼이 없는 헤더',
    hasBackButton: false,
  },
};

export default meta;
