import type { Meta, StoryObj } from '@storybook/react';

import { CardCVCInput } from '../components';

const meta = {
  title: 'Form',
  component: CardCVCInput,
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardCVCInputDefault: Story = {
  args: {
    goNextFormStep: () => {},
  },
};
