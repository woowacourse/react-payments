import type { Meta, StoryObj } from '@storybook/react';

import { CardUserNameInput } from '../components';

const meta = {
  title: 'Form',
  component: CardUserNameInput,
} satisfies Meta<typeof CardUserNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardUserNameInputDefault: Story = {
  args: {
    goNextFormStep: () => {},
  },
};
