import { Meta, StoryObj } from '@storybook/react';

import CardCompanyInput from './index';

const meta: Meta<typeof CardCompanyInput> = {
  title: 'CardInput Container',
  component: CardCompanyInput,
  args: {
    onCardCompanyChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof CardCompanyInput>;

export const CardCompany: Story = {};
