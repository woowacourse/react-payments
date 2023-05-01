import { ReactComponent as BCBankImage } from '../../assets/bankImage/BCBankImage.svg';
import { ReactComponent as HanaBankImage } from '../../assets/bankImage/HanaBankImage.svg';
import { ReactComponent as HyundaiImage } from '../../assets/bankImage/HyundaiImage.svg';
import { ReactComponent as KakaoBankImage } from '../../assets/bankImage/KakaoBankImage.svg';
import { ReactComponent as KookminBankImage } from '../../assets/bankImage/KookminBankImage.svg';
import { ReactComponent as LotteImage } from '../../assets/bankImage/LotteImage.svg';
import { ReactComponent as SinhanBankImage } from '../../assets/bankImage/SinhanBankImage.svg';
import { ReactComponent as WooriBankImage } from '../../assets/bankImage/WooriBankImage.svg';
import { Bank } from '../types';

export const CARD_LIST_STORAGE_KEY = 'cardList';

export const BANK_COLOR_MAP: Record<
  number,
  { background: string; color: string; image: React.FC<React.SVGProps<SVGSVGElement>> }
> = {
  1: { background: 'rgb(222, 84, 86)', color: 'white', image: BCBankImage },
  2: { background: 'rgb(19, 74, 245)', color: 'white', image: SinhanBankImage },
  3: { background: 'rgb(251, 230, 77)', color: 'black', image: KakaoBankImage },
  4: { background: 'rgb(51, 51, 51)', color: 'white', image: HyundaiImage },
  5: { background: 'rgb(187, 223, 245)', color: 'rgb(51, 122, 194)', image: WooriBankImage },
  6: { background: 'rgb(240, 240, 240)', color: 'rgb(225, 0, 0)', image: LotteImage },
  7: { background: 'rgb(64, 146, 143)', color: 'white', image: HanaBankImage },
  8: { background: 'rgb(85, 79, 71)', color: 'rgb(247, 206, 71)', image: KookminBankImage },
};

export const BANK: Bank[] = [
  {
    id: 1,
    bankName: 'BC카드',
  },
  {
    id: 2,
    bankName: '신한카드',
  },
  {
    id: 3,
    bankName: '카카오뱅크',
  },
  {
    id: 4,
    bankName: '현대카드',
  },
  {
    id: 5,
    bankName: '우리카드',
  },
  {
    id: 6,
    bankName: '롯데카드',
  },
  {
    id: 7,
    bankName: '하나카드',
  },
  {
    id: 8,
    bankName: '국민카드',
  },
];
