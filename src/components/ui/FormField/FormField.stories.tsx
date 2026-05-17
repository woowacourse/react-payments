import type { Meta, StoryObj } from '@storybook/react-vite';

import FormField from './index';
import Input from '../Input';

type FormFieldStoryArgs = React.ComponentProps<typeof FormField>;

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
    errorMessage: '',
    children: <></>,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: '',
  },
  render: (args: FormFieldStoryArgs) => (
    <FormField {...args}>
      <label>CVC</label>
      <Input variant="default" />
    </FormField>
  ),
};

export const Error: Story = {
  args: {
    errorMessage: '숫자만 입력 가능합니다.',
  },
  render: (args: FormFieldStoryArgs) => (
    <FormField {...args}>
      <label>CVC</label>
      <Input variant="error" />
    </FormField>
  ),
};
