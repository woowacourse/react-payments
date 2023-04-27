import BCLogo from '../assets/bank/bc-logo.svg';
import HanaLogo from '../assets/bank/hanacard-logo.svg';
import HyundaiLogo from '../assets/bank/hyundaicard-logo.svg';
import KakaoBankLogo from '../assets/bank/kakaobank-logo.svg';
import KBLogo from '../assets/bank/kbcard-logo.svg';
import LotteLogo from '../assets/bank/lottecard-logo.svg';
import ShinhanLogo from '../assets/bank/shinhan-logo.svg';
import WorriLogo from '../assets/bank/worricard-logo.svg';

interface Bank {
  logo: string;
  name: string;
}

export type { Bank };

const bankList: Bank[] = [
  { logo: BCLogo, name: 'BC카드' },
  { logo: HanaLogo, name: '하나카드' },
  { logo: HyundaiLogo, name: '현대카드' },
  { logo: KakaoBankLogo, name: '카카오뱅크' },
  { logo: KBLogo, name: '국민카드' },
  { logo: LotteLogo, name: '롯데카드' },
  { logo: ShinhanLogo, name: '신한카드' },
  { logo: WorriLogo, name: '우리카드' },
];

export default bankList;

export const CARD_COMPANY_COLOR_MAP: Record<string, { background: string; color: string }> = {
  BC카드: { background: 'rgb(222, 84, 86)', color: 'white' },
  신한카드: { background: 'rgb(19, 74, 245)', color: 'white' },
  카카오뱅크: { background: 'rgb(251, 230, 77)', color: 'black' },
  현대카드: { background: 'rgb(51, 51, 51)', color: 'white' },
  우리카드: { background: 'rgb(187, 223, 245)', color: 'rgb(51, 122, 194)' },
  롯데카드: { background: 'rgb(240, 240, 240)', color: 'rgb(225, 0, 0)' },
  하나카드: { background: 'rgb(64, 146, 143)', color: 'white' },
  국민카드: { background: 'rgb(85, 79, 71)', color: 'rgb(247, 206, 71)' },
};
