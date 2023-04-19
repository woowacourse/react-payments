import { StoryObj, Meta } from '@storybook/react';
import CardPassword from './CardPassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPasswordStory: Story = {};
