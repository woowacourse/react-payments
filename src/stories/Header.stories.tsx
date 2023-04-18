import Header from '../components/Header';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

export const AddCard: Story = { args: { title: '카드 추가', hasBackHistory: true } };
export const OwnCard: Story = { args: { title: '보유 카드', hasBackHistory: false } };
