import { Meta, StoryObj } from '@storybook/react';
import CardErrorLabel from '../components/@common/CardErrorLabel';

const meta = {
  component: CardErrorLabel,
  title: 'Item/CardErrorLabel',
} satisfies Meta<typeof CardErrorLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardErrorLabelStory: Story = {
  args: {
    errorMessage: '올바른 카드 정보를 입력해주세요',
  },
};
