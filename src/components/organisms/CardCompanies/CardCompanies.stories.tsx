import type { Meta, StoryObj } from '@storybook/react';

import CardCompanies from '.';

const meta: Meta<typeof CardCompanies> = {
  title: 'organisms/CardCompanies',
  component: CardCompanies,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
