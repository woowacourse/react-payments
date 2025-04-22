import { Meta, StoryObj } from '@storybook/react';
import CardSelectSection from './CardSelectSection';

const meta = {
  title: 'CardSelectSection',
  component: CardSelectSection,
} satisfies Meta<typeof CardSelectSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
