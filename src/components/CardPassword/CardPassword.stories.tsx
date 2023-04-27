import { Meta, StoryObj } from '@storybook/react';
import CardPassword from './CardPassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
  argTypes: {
    checkPassword: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPasswordStory: Story = {
  args: {
    password: {
      0: '0',
      1: '2',
    },
    checkPassword: (order: number, value: string) => true,
  },
};
