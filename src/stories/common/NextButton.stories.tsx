import { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/common/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Next: Story = {
  args: {},
};
