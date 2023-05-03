import { Meta, StoryObj } from '@storybook/react';
import CardPassword from '../components/CardPassword/CardPassword';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPasswordStory: Story = {
  args: {
    cardPasswords: ['', ''],
    errorMessage: '카드 비밀번호 앞 두 자리를 숫자로 입력해주세요.',
    handleCardPasswords: () => {
      return;
    },
  },
};
