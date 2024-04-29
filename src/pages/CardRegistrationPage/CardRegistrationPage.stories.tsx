import type { Meta, StoryObj } from '@storybook/react';
import CardRegistrationPage from './CardRegistrationPage';

const meta = {
  title: 'page/CardRegistrationPage',
  component: CardRegistrationPage,
  tags: ['autodocs'],
} satisfies Meta<typeof CardRegistrationPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
