import type { Meta, StoryObj } from '@storybook/react';
import CardPreview, { CardPreviewProps } from './CardPreview';

const meta: Meta<CardPreviewProps> = {
  title: 'Components/CardPreview',
  component: CardPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: {
      cardNumbers: [1234, 5678, 9012, 3456],
      cardExpiration: [12, 23],
      userName: 'John Doe',
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: [5234, 5678, 9012, 3456],
      cardExpiration: [12, 23],
      userName: 'MasterCard User',
    },
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: [4532, 5678, 9012, 3456],
      cardExpiration: [12, 23],
      userName: 'Visa User',
    },
  },
};
