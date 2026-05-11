import type { Meta, StoryObj } from '@storybook/react-vite';

import FormField from './FormField';
import Input from './Input';

const meta = {
  title: 'ui/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'CVC 번호를 입력해 주세요',
    caption: 'CVC 번호를 입력해 주세요',
    errorMessage: '숫자만 입력 가능합니다.',
    children: <></>,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: false,
  },
  render: (args) => (
    <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
  ),
};

export const Error: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
  ),
};
