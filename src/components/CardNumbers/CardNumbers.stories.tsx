import { StoryObj, Meta } from '@storybook/react';
import CardNumbers from './CardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {};
