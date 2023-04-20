import type { Meta, StoryObj } from '@storybook/react';

import { CardNumbersInput } from '../components';

const meta: Meta<typeof CardNumbersInput> = {
  title: 'Components/CardNumbers',
  component: CardNumbersInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumbersInput>;

export const Container: Story = {
  args: {},
};
