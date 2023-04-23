import type { Meta, StoryObj } from '@storybook/react';

import CardInputMessage from '.';

const meta: Meta<typeof CardInputMessage> = {
  title: 'atomics/CardInputMessage',
  component: CardInputMessage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardRegisterMessage: Story = {
  args: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 700,
    color: '#575757',
    opacity: 0.9,
    children: '새로운 카드를 등록해주세요',
  },
};

export const CardLabelMessage: Story = {
  args: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    color: '#525252',
    children: '카드 번호',
  },
};

export const CardHeaderMessage: Story = {
  args: {
    fontWeight: 500,
    lineHeight: '18px',
    color: '#383838',
    children: '카드 추가',
  },
};

export const CardItemNumberMessage: Story = {
  args: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '14px',
    color: '#fff',
    children: '1111',
    letterSpacing: '2px',
  },
};

export const CardItemDateAndNameMessage: Story = {
  args: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '14px',
    color: '#fff',
    children: 'Name',
  },
};
