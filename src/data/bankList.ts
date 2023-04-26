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
