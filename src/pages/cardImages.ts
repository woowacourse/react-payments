import * as cards from '../images/cards';
import type { CardIssuerType } from '../types';

const cardImages: Record<CardIssuerType, string> = {
  BC카드: cards.bcCard,
  신한카드: cards.shinhanCard,
  카카오뱅크: cards.kakaoBankCard,
  현대카드: cards.hyundaiCard,
  우리카드: cards.wooriCard,
  롯데카드: cards.lotteCard,
  하나카드: cards.hanaCard,
  국민카드: cards.kbCard,
};

const cardIcons: Record<CardIssuerType, string> = {
  BC카드: cards.bcIcon,
  신한카드: cards.shinhanIcon,
  카카오뱅크: cards.kakaoBankIcon,
  현대카드: cards.hyundaiIcon,
  우리카드: cards.wooriIcon,
  롯데카드: cards.lotteIcon,
  하나카드: cards.hanaIcon,
  국민카드: cards.kbIcon,
};

const cardSelectButtonInfos: { title: CardIssuerType; src: string }[] = [
  { title: 'BC카드', src: cardIcons['BC카드'] },
  { title: '신한카드', src: cardIcons['신한카드'] },
  { title: '카카오뱅크', src: cardIcons['카카오뱅크'] },
  { title: '현대카드', src: cardIcons['현대카드'] },
  { title: '우리카드', src: cardIcons['우리카드'] },
  { title: '롯데카드', src: cardIcons['롯데카드'] },
  { title: '하나카드', src: cardIcons['하나카드'] },
  { title: '국민카드', src: cardIcons['국민카드'] },
];

export { cardImages, cardSelectButtonInfos };
