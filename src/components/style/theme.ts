import { BankCode } from 'components/common/Card/types';

const colors = {
  card: {
    background: {
      [BankCode.BCCard]: '#F04651',
      [BankCode.ShinHanCard]: '#0046FF',
      [BankCode.KakaoBank]: '#FFE600',
      [BankCode.HyunDaiCard]: '#000000',
      [BankCode.WooriCard]: '#007BC8',
      [BankCode.LotteCard]: '#ED1C24',
      [BankCode.HanaCard]: '#009490',
      [BankCode.KookMinCard]: '#554E45',
    },
    font: {
      [BankCode.BCCard]: '#FFFFFF',
      [BankCode.ShinHanCard]: '#FFFFFF',
      [BankCode.KakaoBank]: '#000000',
      [BankCode.HyunDaiCard]: '#FFFFFF',
      [BankCode.WooriCard]: '#FFFFFF',
      [BankCode.LotteCard]: '#FFFFFF',
      [BankCode.HanaCard]: '#FFFFFF',
      [BankCode.KookMinCard]: '#FFCD06',
    },
  },
};

export const theme = { colors };
