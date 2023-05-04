import { Meta, StoryObj } from '@storybook/react';
import RegisterCard from './RegisterCardPage';

function RegisterCardStories() {
  return <RegisterCard />;
}

const meta: Meta<typeof RegisterCardStories> = {
  component: RegisterCardStories,
  title: 'RegisterCard',
};

export default meta;
type Story = StoryObj<typeof RegisterCardStories>;

export const Default: Story = {
  args: {},
};
