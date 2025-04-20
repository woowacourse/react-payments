import { Meta, StoryObj } from '@storybook/react';
import CardCVCNumberSection from './CardCVCNumberSection';

const meta = {
  title: 'CardCVCNumberSection',
  component: CardCVCNumberSection,
} satisfies Meta<typeof CardCVCNumberSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    CVCNumber: '123',
    changeCVCNumber: () => alert('변경'),
  },
};
