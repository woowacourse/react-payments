import type { Meta, StoryObj } from '@storybook/react';
import InputSection from '../components/InputSection';
import { CARD_NUMBER, EXPIRATION_PERIOD, OWNER_NAME } from '../constants/cardSection';

const meta = {
  title: 'InputSection',
  component: InputSection,
  tags: ['autodocs'],
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
