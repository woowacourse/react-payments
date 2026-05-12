import type { Meta, StoryObj } from '@storybook/react-vite';
import CardCompany from '../components/CardCompany';

const meta = {
  title: 'Components/CardCompany',
  component: CardCompany,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardCompany>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCompanyStatus: {
      cardCompany: '',
    },
    setCardCompany: {
      handleCardCompany: () => {},
    },
  },
};
