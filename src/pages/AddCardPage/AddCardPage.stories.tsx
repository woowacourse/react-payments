import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { TEST_ID } from '@constants/storybookTest';
import AddCardPage from './AddCardPage';

function AddCardPageStories() {
  return (
    <div className="app">
      <AddCardPage />
    </div>
  );
}

const meta: Meta<typeof AddCardPageStories> = {
  component: AddCardPageStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof AddCardPageStories>;

export const AddCard: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('신힌 카드사를 고릅니다.', async () => {
      await userEvent.click(canvas.getByTestId(TEST_ID.SHINHAN));
    });

    await step('카드 번호를 입력합니다.', async () => {
      await userEvent.type(
        canvas.getByTestId(TEST_ID.FIRST_CARD_NUMBER),
        '1234',
        { delay: 50 }
      );

      await userEvent.type(
        canvas.getByTestId(TEST_ID.SECOND_CARD_NUMBER),
        '1234',
        { delay: 50 }
      );

      await userEvent.type(
        canvas.getByTestId(TEST_ID.THIRD_CARD_NUMBER),
        '1234',
        { delay: 50 }
      );

      await userEvent.type(
        canvas.getByTestId(TEST_ID.FOURTH_CARD_NUMBER),
        '1234',
        { delay: 50 }
      );
    });

    await step('만료일을 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.MONTH), '01', {
        delay: 50,
      });

      await userEvent.type(canvas.getByTestId(TEST_ID.YEAR), '23', {
        delay: 50,
      });
    });

    await step('소유자 이름을 입력합니다.', async () => {
      await userEvent.type(
        canvas.getByTestId(TEST_ID.OWNER),
        'kim younggil wus',
        {
          delay: 10,
        }
      );
    });

    await step('보안코드를 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.CVC), '123', {
        delay: 50,
      });
    });

    await step('패스워드를 입력합니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.FIRST_PASSWORD), '1', {
        delay: 50,
      });

      await userEvent.type(canvas.getByTestId(TEST_ID.SECOND_PASSWORD), '3', {
        delay: 50,
      });
    });

    await step('카드 정보를 제출합니다.', () => {
      userEvent.click(canvas.getByText('다음'));
    });

    await step('달에 입력된 값을 지웁니다.', async () => {
      userEvent.clear(canvas.getByTestId(TEST_ID.MONTH));
    });

    await step('올바른 달로 값을 고칩니다.', async () => {
      await userEvent.type(canvas.getByTestId(TEST_ID.MONTH), '0', {
        delay: 50,
      });
    });
    await userEvent.type(canvas.getByTestId(TEST_ID.MONTH), '9', {
      delay: 50,
    });

    await step('카드를 카카오 카드로 변경합니다.', async () => {
      await userEvent.click(canvas.getByTestId(TEST_ID.CHANGE_CARD));
      await userEvent.click(canvas.getByTestId(TEST_ID.KAKAO));
    });
    await userEvent.type(canvas.getByTestId(TEST_ID.MONTH), '9', {
      delay: 50,
    });

    await step('카드 정보를 제출합니다.', () => {
      userEvent.click(canvas.getByText('다음'));
    });
  },
};
