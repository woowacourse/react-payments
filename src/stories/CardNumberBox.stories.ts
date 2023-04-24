import type { Meta, StoryObj } from '@storybook/react';

import { CardNumbers } from '../components/InputBox';

const meta: Meta<typeof CardNumbers> = {
  title: 'Components/CardNumbers',
  component: CardNumbers,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumbers>;

export const Container: Story = {
  args: {},
};
