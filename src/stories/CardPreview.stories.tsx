import type { Meta, StoryObj } from '@storybook/react';

import CardPreview from '../components/CardPreview';

const meta: Meta<typeof CardPreview> = {
  title: 'CardPreview',
  component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
