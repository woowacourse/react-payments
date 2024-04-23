import type { Meta, StoryObj } from '@storybook/react';
import InputTitle from '../components/common/InputTitle';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

const meta = {
  title: 'InputTitle',
  component: InputTitle,
} satisfies Meta<typeof InputTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    title: CARD_NUMBER.title,
    subtitle: CARD_NUMBER.subtitle,
  },
};

export const CardPeriod: Story = {
  args: {
    title: CARD_PERIOD.title,
    subtitle: CARD_PERIOD.subtitle,
  },
};

export const CardOwner: Story = {
  args: {
    title: CARD_OWNER.title,
    subtitle: CARD_OWNER.subtitle,
  },
};
