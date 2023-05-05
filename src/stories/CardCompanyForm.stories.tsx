import { Meta, StoryObj } from '@storybook/react';
import CardCompanyForm from '../components/CardCompanyModal/CardCompanyForm';

const meta = {
  component: CardCompanyForm,
  title: 'Section/CardCompanyModal',
} satisfies Meta<typeof CardCompanyForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardCompanyModalStory: Story = {
  args: {
    setCardCompany: () => {
      return;
    },
    setIsModalOpen: () => {
      return;
    },
  },
};
