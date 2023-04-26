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

export const BANK: Bank[] = [
  {
    id: 1,
    bankName: 'BC카드',
    BankImage: BCBankImage,
  },
  {
    id: 2,
    bankName: '신한카드',
    BankImage: SinhanBankImage,
  },
  {
    id: 3,
    bankName: '키키오뱅크',
    BankImage: KakaoBankImage,
  },
  {
    id: 4,
    bankName: '현대카드',
    BankImage: HyundaiImage,
  },
  {
    id: 5,
    bankName: '우리카드',
    BankImage: WooriBankImage,
  },
  {
    id: 6,
    bankName: '롯데카드',
    BankImage: LotteImage,
  },
  {
    id: 7,
    bankName: '하나카드',
    BankImage: HanaBankImage,
  },
  {
    id: 8,
    bankName: '국민카드',
    BankImage: KookminBankImage,
  },
];
