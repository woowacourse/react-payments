import { Meta, StoryObj } from '@storybook/react';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardOwnerNameStory: Story = {
  args: {
    cardOwnerName: '',
    errorMessage: '카드 소유자명은 30자 이내의 대문자 영문으로만 입력해주세요.',
    handleCardOwnerName: () => {
      return;
    },
  },
};
