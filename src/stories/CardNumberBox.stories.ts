import type { Meta, StoryObj } from '@storybook/react';

import CardNumberBox from '../components/CardNumberBox/CardNumberBox';

const meta: Meta<typeof CardNumberBox> = {
  title: 'Components/CardNumberBox',
  component: CardNumberBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumberBox>;

export const Container: Story = {
  args: {},
};
