import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButton from '../components/CardSelectButtonPack/CardSelectButton/CardSelectButton';
import { cardIcons } from '../pages/cardImages';

/**
 * `CardSelectButton` 은 `CardSelectButtonPack` 컴포넌트를 이루는 버튼들입니다.
 * 이 컴포넌트들이 합쳐져 카드사 선택 모달에 필요한 버튼 모음을 이룹니다.
 */
const meta = {
  component: CardSelectButton,
  title: 'CardSelectButton',
} satisfies Meta<typeof CardSelectButton>;

type Story = StoryObj<typeof meta>;

export const BCButton: Story = {
  args: { title: 'BC카드', src: cardIcons['BC카드'] },
};

export const ShinhanButton: Story = {
  args: { title: '신한카드', src: cardIcons['신한카드'] },
};

export const KakaoButton: Story = {
  args: { title: '카카오뱅크', src: cardIcons['카카오뱅크'] },
};

export const HyundaiButton: Story = {
  args: { title: '현대카드', src: cardIcons['현대카드'] },
};

export const WooriButton: Story = {
  args: { title: '우리카드', src: cardIcons['우리카드'] },
};

export const LotteButton: Story = {
  args: { title: '롯데카드', src: cardIcons['롯데카드'] },
};

export const HanaButton: Story = {
  args: { title: '하나카드', src: cardIcons['하나카드'] },
};

export const KookminButton: Story = {
  args: { title: '국민카드', src: cardIcons['국민카드'] },
};

export default meta;
