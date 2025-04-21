import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numbers: { first: '', second: '', third: '', fourth: '' },
    cardLogo: '',
    expiration: { month: '', year: '' }
  },
  render: (args) => <CardPreview {...args} />
};
