import type { Meta, StoryObj } from '@storybook/react';
import { CardCompanyButton } from '../../components/CardCompanyButton';

const meta = {
  title: 'Button/CardCompanyButton',
  component: CardCompanyButton,
  argTypes: { handleOnClick: { action: 'clicked' } },
  tags: ['autodocs'],
} satisfies Meta<typeof CardCompanyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompanyButton: Story = {
  args: {
    cardCompany: 'BC카드',
  },
};
