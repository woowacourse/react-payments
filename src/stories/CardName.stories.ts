import { StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import CardNameInput from '../components/CardNameInput';

const meta = {
  title: 'CardInput',
  component: CardNameInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardName: Story = {
  args: {
    placeholder: '카드 번호를 입력해 주세요.',
    isAutoFocus: true,
    isRequired: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNameInput = canvas.getByPlaceholderText('카드 번호를 입력해 주세요.');

    await userEvent.type(cardNameInput, 'PATRICK짱', {
      delay: 100,
    });
  },
};
