import { Meta, StoryObj } from '@storybook/react';
import CardInput from './CardInput';

const meta = {
  component: CardInput,
  title: 'Section/CardInput',
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardInputStory: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: '0000',
  },
};
