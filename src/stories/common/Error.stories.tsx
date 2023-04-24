import { Meta, StoryObj } from '@storybook/react';
import Error from '../../components/common/Error';

const meta: Meta<typeof Error> = {
  component: Error,
  title: 'Error',
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    text: '안녕',
  },
};
