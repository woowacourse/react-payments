import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/common/Text';

const meta = {
  title: 'common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'Title',
    color: 'black',
    children: '텍스트',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Title', 'Body', 'Caption'],
    },
    color: {
      control: { type: 'color' },
    },
  },
  render: (args) => {
    return <Text {...args} />;
  },
};
