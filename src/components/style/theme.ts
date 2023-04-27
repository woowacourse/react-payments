import { BankCodeList } from 'components/common/Card/types';

const colors = {
  card: {
    background: {
      [BankCodeList.BCCard]: '#F04651',
      [BankCodeList.ShinHanCard]: '#0046FF',
      [BankCodeList.KakaoBank]: '#FFE600',
      [BankCodeList.HyunDaiCard]: '#000000',
      [BankCodeList.WooriCard]: '#007BC8',
      [BankCodeList.LotteCard]: '#ED1C24',
      [BankCodeList.HanaCard]: '#009490',
      [BankCodeList.KookMinCard]: '#554E45',
    },
    font: {
      [BankCodeList.BCCard]: '#FFFFFF',
      [BankCodeList.ShinHanCard]: '#FFFFFF',
      [BankCodeList.KakaoBank]: '#000000',
      [BankCodeList.HyunDaiCard]: '#FFFFFF',
      [BankCodeList.WooriCard]: '#FFFFFF',
      [BankCodeList.LotteCard]: '#FFFFFF',
      [BankCodeList.HanaCard]: '#FFFFFF',
      [BankCodeList.KookMinCard]: '#FFCD06',
    },
  },
};

export const theme = { colors };
