import type { Meta, StoryObj } from '@storybook/react';
import CardInformationInputPage from '../pages/CardInformationInputPage';

const meta = {
  title: 'CardInformationInputPage',
  component: CardInformationInputPage,
} satisfies Meta<typeof CardInformationInputPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
