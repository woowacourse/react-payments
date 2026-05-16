import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '../components/Common/Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '1234',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: '1234',
  },
};

export const Error: Story = {
  render: () => <Input placeholder="1234" data-is-error="true" />,
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '**',
  },
};
