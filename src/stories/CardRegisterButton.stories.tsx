import type { Meta, StoryObj } from '@storybook/react';

import CardRegisterButton from '../components/CardRegisterButton';

const meta = {
  title: 'Example/CardRegisterButton',
  component: CardRegisterButton,
} satisfies Meta<typeof CardRegisterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
