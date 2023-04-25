import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButtonPack from '../components/CardSelectButtonPack/CardSelectButtonPack';
import bcLogo from '../images/icon_bc_card.png';
import shinhanLogo from '../images/icon_shinhan_card.png';
import kakaoBankLogo from '../images/icon_kakao_bank_card.png';
import hyundaiLogo from '../images/icon_hyundai_card.png';
import wooriLogo from '../images/icon_woori_card.png';
import lotteLogo from '../images/icon_lotte_card.png';
import hanaLogo from '../images/icon_hana_card.png';
import kbLogo from '../images/icon_kb_card.png';

const meta = {
  component: CardSelectButtonPack,
  title: '카드 발급사 선택 버튼 모음 (CardSelectButtonPack)',
} satisfies Meta<typeof CardSelectButtonPack>;

const cardSelectButtonInfos = [
  { title: 'BC카드', src: bcLogo },
  { title: '신한카드', src: shinhanLogo },
  { title: '카카오뱅크', src: kakaoBankLogo },
  { title: '현대카드', src: hyundaiLogo },
  { title: '우리카드', src: wooriLogo },
  { title: '롯데카드', src: lotteLogo },
  { title: '하나카드', src: hanaLogo },
  { title: '국민카드', src: kbLogo },
];

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: { width: '290px', cardSelectButtonInfos: cardSelectButtonInfos },
};

export const Secondary: Story = {
  args: { width: '440px', cardSelectButtonInfos: cardSelectButtonInfos },
};

export default meta;
