import type { Meta, StoryObj } from '@storybook/react';
import InputSection from '../components/InputSection';
import GlobalStyles from '../GlobalStyles';
import {
  CARD_COMPANY,
  CARD_NUMBER,
  CVC_NUMBER,
  EXPIRATION_PERIOD,
  OWNER_NAME,
  PASSWORD,
} from '../constants/cardSection';

const meta = {
  title: 'InputSection',
  component: InputSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: '제목',
    },
    description: {
      control: 'text',
      description: '설명',
    },
    inputTitle: {
      control: 'text',
      description: '라벨',
    },
  },
} satisfies Meta<typeof InputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    title: CARD_NUMBER.title,
    description: CARD_NUMBER.description,
    inputTitle: CARD_NUMBER.inputTitle,
    children: <></>,
  },
};

export const ExpirationPeriod: Story = {
  args: {
    title: EXPIRATION_PERIOD.title,
    description: EXPIRATION_PERIOD.description,
    inputTitle: EXPIRATION_PERIOD.inputTitle,
    children: <></>,
  },
};

export const OwnerName: Story = {
  args: {
    title: OWNER_NAME.title,
    inputTitle: OWNER_NAME.inputTitle,
    children: <></>,
  },
};

export const CardCompany: Story = {
  args: {
    title: CARD_COMPANY.title,
    description: CARD_COMPANY.description,
    children: <></>,
  },
};

export const CVCNumber: Story = {
  args: {
    title: CVC_NUMBER.title,
    inputTitle: CVC_NUMBER.inputTitle,
    children: <></>,
  },
};

export const Password: Story = {
  args: {
    title: PASSWORD.title,
    description: PASSWORD.description,
    inputTitle: PASSWORD.inputTitle,
    children: <></>,
  },
};
