import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    isFocused: false,
    buttonText: '버튼 text',
    buttonType: 'default',
  },
  render: function Render(args) {
    return <Button {...args} />;
  },
};
