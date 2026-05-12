import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './index';

type ButtonStoryArgs = React.ComponentProps<typeof Button>;

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary'],
      description: '버튼 variant',
    },
  },
  args: {
    onClick: fn(),
    children: '확인',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />,
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />,
};
