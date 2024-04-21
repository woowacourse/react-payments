import type { Meta, StoryObj } from '@storybook/react';

import { CardUserNameInput } from '../components';

const meta = {
  title: 'Input',
  component: CardUserNameInput,
} satisfies Meta<typeof CardUserNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardUserNameInputDefault: Story = {
  args: {
    editCardUserName: () => {},
  },
};
