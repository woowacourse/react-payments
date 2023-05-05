import type { Meta, StoryObj } from '@storybook/react';
import CardSwitchButton from '../components/AddCardForm/CardSwitchButton/CardSwitchButton';

/**
 * `CardSwitchButton` 은 카드사 변경 모달을 사용자가 열 수 있도록 고안된 버튼입니다.
 * `CardSwitchButton` 는 `position: absolute` 로, 원활한 사용을 위해서는 `top` 과 `left` 를 명시해야 함에 주의하세요.
 */
const meta = {
  title: 'CardSwitchButton',
  component: CardSwitchButton,
} satisfies Meta<typeof CardSwitchButton>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    modalContent: null,
    left: '45%',
    top: '20px',
  },
};

export default meta;
