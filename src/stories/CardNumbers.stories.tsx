import { Meta, StoryObj } from '@storybook/react';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {
  args: {
    cardNumbers: ['', '', '', ''],
    errorMessage: '숫자로만 카드 번호를 입력해주세요.',
    handleCardNumbers: () => {
      return;
    },
  },
};
