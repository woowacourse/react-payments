import { Meta, StoryObj } from '@storybook/react';
import { ExpirationDateInput } from './ExpirationDateInput';

const meta = {
  component: ExpirationDateInput,
  title: 'Section/Inputs/ExpirationDateInput',
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpirationDateInputStory: Story = {
  args: {
    onChangeMonth: () => {},
    onChangeYear: () => {},
  },
};
