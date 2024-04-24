import type { Meta, StoryObj } from '@storybook/react';
import Select from '../../components/Select/Select';
import { fn } from '@storybook/test';

const meta = {
  title: 'Select',
  component: Select,
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    value: null,
    placeholder: '반가운 육칠이들',
    options: [
      { label: '쿠키', value: '쿠키' },
      { label: '파슬리', value: '파슬리' },
      { label: '썬데이', value: '썬데이' },
      { label: '쑤쑤', value: '쑤쑤' },
      { label: '프룬', value: '프룬' },
      { label: '올리', value: '올리' },
      { label: '지니', value: '지니' },
      { label: '토다리', value: '토다리' },
    ],
  },
};

export const 선택: Story = {
  args: {
    value: '쿠키',
    placeholder: '반가운 육칠이들',
    options: [
      { label: '쿠키', value: '쿠키' },
      { label: '파슬리', value: '파슬리' },
      { label: '썬데이', value: '썬데이' },
      { label: '쑤쑤', value: '쑤쑤' },
      { label: '프룬', value: '프룬' },
      { label: '올리', value: '올리' },
      { label: '지니', value: '지니' },
      { label: '토다리', value: '토다리' },
    ],
  },
};
