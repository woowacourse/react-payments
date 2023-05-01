import { Meta, StoryObj } from '@storybook/react';
import SelectCardCompany from './SelectCardCompany';

const meta: Meta<typeof SelectCardCompany> = {
  component: SelectCardCompany,
  title: 'SelectCardCompany',
};

export default meta;
type Story = StoryObj<typeof SelectCardCompany>;

export const Default: Story = {
  args: {
    onCardCompanySelectClick: () => {},
  },
};
