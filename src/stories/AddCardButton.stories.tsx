import type { Meta, StoryObj } from '@storybook/react';
import AddCardButton from '../components/CardList/AddCardButton/AddCardButton';
import { HashRouter } from 'react-router-dom';

/**
 * `AddCardButton` 은 **카드 정보 작성 메뉴**로 사용자를 이동시키기 위한 버튼입니다.
 */
const meta = {
  title: 'AddCardButton',
  component: AddCardButton,
  decorators: [
    Story => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof AddCardButton>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { showMessage: true },
};

/**
 * 카드가 한 장이라도 카드 목록에 등록된 경우에는, 등록 가이드 메시지를 보여주지 않습니다.
 */
export const NoMessage: Story = {
  args: { showMessage: false },
};

export default meta;
