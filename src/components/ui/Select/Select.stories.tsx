import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Select from './index';

type SelectStoryArgs = React.ComponentProps<typeof Select>;

const OPTIONS = [
  { label: '카드사를 선택해 주세요', value: '' },
  { label: 'BC카드', value: 'bc' },
  { label: '신한카드', value: 'shinhan' },
  { label: '카카오뱅크', value: 'kakao' },
];

const meta = {
  title: 'ui/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'error'],
      description: 'Select variant',
    },
  },
  args: {
    options: OPTIONS,
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    value: '',
  },
  render: (args: SelectStoryArgs) => <Select {...args} />,
};

export const Selected: Story = {
  args: {
    variant: 'default',
    value: 'bc',
  },
  render: (args: SelectStoryArgs) => <Select {...args} />,
};

export const Error: Story = {
  args: {
    variant: 'error',
    value: '',
  },
  render: (args: SelectStoryArgs) => <Select {...args} />,
};
