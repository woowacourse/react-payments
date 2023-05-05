import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButtonPack from '../components/CardSelectButtonPack/CardSelectButtonPack';
import { cardSelectButtonInfos } from '../pages/cardImages';

/**
 * `CardSelectButtonPack` 은 `CardSelectButton`으로 이루어진, **카드사 선택** 기능 구현을 위한 버튼들의 모음입니다.
 *  공용 컴포넌트인 `ModalBottomSheet` 의 내부에 넣어 사용할 수 있습니다.
 */
const meta = {
  component: CardSelectButtonPack,
  title: 'CardSelectButtonPack',
} satisfies Meta<typeof CardSelectButtonPack>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { width: '290px', cardSelectButtonInfos: cardSelectButtonInfos },
};

export default meta;
