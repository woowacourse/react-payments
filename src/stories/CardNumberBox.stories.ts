import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInputBox from '../components/CardNumberInputBox/CardNumberInputBox';

const meta: Meta<typeof CardNumberInputBox> = {
  title: 'Components/CardNumberInputBox',
  component: CardNumberInputBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardNumberInputBox>;

export const Container: Story = {
  args: {},
};
