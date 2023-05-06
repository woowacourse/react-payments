import { Meta, StoryObj } from '@storybook/react';
import CardCompanyForm from '../components/CardCompanyForm/CardCompanyForm';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardCompanyForm,
  title: 'Section/CardCompanyForm',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardCompanyForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardCompanyFormStory: Story = {
  args: {
    setCardCompany: () => {
      return;
    },
    setIsModalOpen: () => {
      return;
    },
  },
};
