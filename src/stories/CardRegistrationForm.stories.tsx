import CardRegistrationForm from '../components/CardRegistrationForm';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof CardRegistrationForm>;

const meta: Meta<typeof CardRegistrationForm> = {
  title: 'CardRegistrationForm',
  component: CardRegistrationForm,
};

export default meta;

export const Default: Story = {
  args: {},
};
