import { Meta, StoryObj } from '@storybook/react';
import CompanyLogoList from '../components/CompanyLogoList/CompanyLogoList';

const meta: Meta<typeof CompanyLogoList> = {
  title: 'Components/CompanyLogoList',
  component: CompanyLogoList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompanyLogoList>;

export const Default: Story = {
  args: {
    handleModalClose: () => console.log('모달 닫힘'),
  },
};
