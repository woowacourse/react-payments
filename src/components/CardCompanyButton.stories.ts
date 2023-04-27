import type { Meta, StoryObj } from '@storybook/react';
import { CardCompanyButton } from './CardCompanyButton';

const meta = {
  title: 'CardCompanyButton',
  component: CardCompanyButton,
} satisfies Meta<typeof CardCompanyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompanyButton: Story = {
  args: {
    cardCompany: 'BC카드',
  },
};
