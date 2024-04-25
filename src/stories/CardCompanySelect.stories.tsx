import type { Meta, StoryObj } from '@storybook/react';

import { CardCompanySelect } from '../components';

const meta = {
  title: 'Form',
  component: CardCompanySelect,
} satisfies Meta<typeof CardCompanySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardCompanySelectDefault: Story = {
  args: {
    editCardCompany: () => {},
    goNextFormStep: () => {},
  },
};
