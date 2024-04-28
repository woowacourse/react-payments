import { Meta, StoryObj } from '@storybook/react';

import CardBack from './index';

const meta: Meta<typeof CardBack> = {
  title: 'CardPreview/Back',
  component: CardBack,
};

export default meta;

type Story = StoryObj<typeof CardBack>;

export const Default: Story = {
  args: {
    CVCNumber: 123,
  },
};
