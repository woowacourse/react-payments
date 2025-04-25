import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'Card',
  component: CardPreview
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { numbers: ['1345', '1092', '5678', '9299'], cardLogo: 'visa', expiration: ['11', '20'] },
  render: (args) => <CardPreview {...args} />
};
