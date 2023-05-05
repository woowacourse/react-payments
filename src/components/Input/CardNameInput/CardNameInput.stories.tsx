import { Meta, StoryObj } from '@storybook/react';
import { CardNameInput } from './CardNameInput';

const meta = {
  component: CardNameInput,
} satisfies Meta<typeof CardNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNameInputStory: Story = {
  args: {
    value: 'PARK',
    onChange: () => {},
  },
};
