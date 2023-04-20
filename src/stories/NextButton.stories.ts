import type { Meta, StoryObj } from '@storybook/react';
import NextButton from '../components/NextButton/NextButton';

const meta = {
  component: NextButton,
  title: 'NextButton',
} satisfies Meta<typeof NextButton>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};

export default meta;
