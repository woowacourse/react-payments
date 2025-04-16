import type { Meta, StoryObj } from '@storybook/react';
import CardCVCField from './CardCVCField';

const meta = {
  title: 'CardCVCField',
  component: CardCVCField,
} satisfies Meta<typeof CardCVCField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <CardCVCField />;
  },
};
