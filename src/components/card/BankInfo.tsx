import React from 'react';
import styled from 'styled-components';
import BC_CARD from '../../../public/assets/bank/bc_card.png';
import SHINHAN_CARD from '../../../public/assets/bank/shinhan_card.png';
import KAKAO_BANK from '../../../public/assets/bank/kakao_bank.png';
import HYUNDAI_CARD from '../../../public/assets/bank/hyundai_card.png';
import WOORI_CARD from '../../../public/assets/bank/woori_card.png';
import LOTTE_CARD from '../../../public/assets/bank/lotte_card.png';
import HANA_CARD from '../../../public/assets/bank/hana_card.png';
import KB_CARD from '../../../public/assets/bank/kb_card.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const Title = styled.span`
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.085em;
  color: #525252;
`;

type BankType =
  | 'bc'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kb';

interface BankInfoProps {
  kind: BankType;
}

interface BankDataDetail {
  source: string;
  title: string;
}

const BANK_DATA: Record<BankType, BankDataDetail> = {
  bc: {
    source: BC_CARD,
    title: 'BC카드',
  },
  shinhan: {
    source: SHINHAN_CARD,
    title: '신한카드',
  },
  kakao: {
    source: KAKAO_BANK,
    title: '카카오뱅크',
  },
  hyundai: {
    source: HYUNDAI_CARD,
    title: '현대카드',
  },
  woori: {
    source: WOORI_CARD,
    title: '우리카드',
  },
  lotte: {
    source: LOTTE_CARD,
    title: '롯데카드',
  },
  hana: {
    source: HANA_CARD,
    title: '하나카드',
  },
  kb: {
    source: KB_CARD,
    title: '국민카드',
  },
};

export default function BankInfo({ kind }: BankInfoProps) {
  return (
    <Wrapper>
      <Image src={BANK_DATA[kind].source} />
      <Title>{BANK_DATA[kind].title}</Title>
    </Wrapper>
  );
}
