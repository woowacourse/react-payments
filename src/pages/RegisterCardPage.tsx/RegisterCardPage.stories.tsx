import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { TEST_ID } from '@constants/storybookTest';
import RegisterCard from './RegisterCardPage';

function RegisterCardStories() {
  return <RegisterCard />;
}

const meta: Meta<typeof RegisterCardStories> = {
  component: RegisterCardStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof RegisterCardStories>;

export const RegisterCardPage: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('카드 별칭을 입력합니다.', async () => {
      await userEvent.type(
        canvas.getByTestId(TEST_ID.CARD_TITLE),
        '알뜰 카카오 카드',
        {
          delay: 100,
        }
      );
    });

    await step('카드 별칭을 제출합니다.', async () => {
      await userEvent.click(canvas.getByText('확인'));
    });
  },
};
