import { Meta, StoryObj } from '@storybook/react';
import CardPassword from '../components/CardPassword/CardPassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPasswordStory: Story = {
  args: {
    passwords: ['1', '2'],
    isSetPasswords: () => true,
  },
};
