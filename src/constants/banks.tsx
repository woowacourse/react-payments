import React from 'react';
import { ReactComponent as BC_IC } from '../assets/svg/bank/bc_ic.svg';
import { ReactComponent as HANA_IC } from '../assets/svg/bank/hana_ic.svg';
import { ReactComponent as HYUNDAI_IC } from '../assets/svg/bank/hyundai_ic.svg';
import { ReactComponent as KAKAO_IC } from '../assets/svg/bank/kakao_ic.svg';
import { ReactComponent as KB_IC } from '../assets/svg/bank/kb_ic.svg';
import { ReactComponent as LOTTE_IC } from '../assets/svg/bank/lotte_ic.svg';
import { ReactComponent as SINHAN_IC } from '../assets/svg/bank/sinhan_ic.svg';
import { ReactComponent as WOORI_IC } from '../assets/svg/bank/woori_ic.svg';

export const BC = 'BC';
export const SINHAN = 'SINHAN';
export const KAKAO = 'KAKAO';
export const HYUNDAI = 'HYUNDAI';
export const WOORI = 'WOORI';
export const LOTTE = 'LOTTE';
export const HANA = 'HANA';
export const KB = 'KB';

export const BANKS = [BC, SINHAN, KAKAO, HYUNDAI, WOORI, LOTTE, HANA, KB] as const;

export const BANKS_INFO = {
  BC: {
    label: 'BC카드',
    logo: <BC_IC />,
    bg: '#C03841',
  },
  SINHAN: {
    label: '신한카드',
    logo: <SINHAN_IC />,
    bg: '#0046FF',
  },
  KAKAO: {
    label: '카카오뱅크',
    logo: <KAKAO_IC />,
    bg: '#FFE600',
  },
  HYUNDAI: {
    label: '현대카드',
    logo: <HYUNDAI_IC />,
    bg: '##000000',
  },
  WOORI: {
    label: '우리카드',
    logo: <WOORI_IC />,
    bg: '##000000',
  },
  LOTTE: {
    label: '롯데카드',
    logo: <LOTTE_IC />,
    bg: '#ED1C24',
  },
  HANA: {
    label: '하나카드',
    logo: <HANA_IC />,
    bg: '#009490',
  },
  KB: {
    label: '국민카드',
    logo: <KB_IC />,
    bg: '#685E54',
  },
} as const;
