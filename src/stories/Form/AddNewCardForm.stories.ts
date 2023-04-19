import type { Meta, StoryObj } from '@storybook/react';

import { AddNewCardForm } from '../../components/AddNewCardForm';

const meta = {
  title: 'Example/Form',
  component: AddNewCardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddNewCard: Story = {};
