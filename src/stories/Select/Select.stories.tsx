import type { Meta, StoryObj } from '@storybook/react';
import Select from '../../components/Select/Select';
import { fn } from '@storybook/test';
import { SIX_SEVEN } from './options';

const meta = {
  title: 'Select',
  component: Select,
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    value: '',
    placeholder: '반가운 육칠이들',
    options: SIX_SEVEN.options,
  },
};

export const 선택: Story = {
  args: {
    value: '쿠키',
    placeholder: '반가운 육칠이들',
    options: SIX_SEVEN.options,
  },
};
