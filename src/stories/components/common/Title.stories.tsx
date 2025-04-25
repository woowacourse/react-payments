import type { Meta, StoryObj } from '@storybook/react';
import Title from '../../../components/common/Title';

const meta = {
  title: 'Components/common/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { main: 'Main Title', caption: 'Caption' },
};
