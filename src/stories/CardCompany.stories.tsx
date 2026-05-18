import type { Meta, StoryObj } from '@storybook/react-vite';
import CardCompany from '../components/CardCompany';
import { useCardCompany } from '../hooks/useCardCompany';
import {
  bcCardCompanyStatus,
  createCardCompanyHandler,
  emptyCardCompanyStatus,
  hyundaiCardCompanyStatus,
  kakaoCardCompanyStatus,
} from './cardStoryFixtures';

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
    cardCompanyStatus: emptyCardCompanyStatus,
    setCardCompany: createCardCompanyHandler(),
  },
};

export const SelectedBC: Story = {
  args: {
    cardCompanyStatus: bcCardCompanyStatus,
    setCardCompany: createCardCompanyHandler(),
  },
};

export const SelectedKakaoBank: Story = {
  args: {
    cardCompanyStatus: kakaoCardCompanyStatus,
    setCardCompany: createCardCompanyHandler(),
  },
};

export const SelectedHyundai: Story = {
  args: {
    cardCompanyStatus: hyundaiCardCompanyStatus,
    setCardCompany: createCardCompanyHandler(),
  },
};

export const Interactive: Story = {
  args: {
    cardCompanyStatus: emptyCardCompanyStatus,
    setCardCompany: createCardCompanyHandler(),
  },
  render: () => {
    const [cardCompanyStatus, setCardCompany] = useCardCompany();

    return <CardCompany cardCompanyStatus={cardCompanyStatus} setCardCompany={setCardCompany} />;
  },
};
