import type { Meta, StoryObj } from '@storybook/react-vite';
import CardBrand from '../components/CardBrand';

const meta = {
  title: 'Components/CardBrand',
  component: CardBrand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardBrand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
