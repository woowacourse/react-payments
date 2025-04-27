import type { Meta, StoryObj } from '@storybook/react';
import CardCompanySelect from './CardCompanySelect';

const meta = {
  title: 'CardCompanySelect',
  component: CardCompanySelect,
} satisfies Meta<typeof CardCompanySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCompany: undefined,
    onChange: () => {},
  },
  render: (args) => {
    return <CardCompanySelect {...args} />;
  },
};
