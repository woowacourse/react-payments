import { CARD_SIZE_UNIT } from '../../constants';

const CARD_SIZE = {
  [CARD_SIZE_UNIT.SMALL]: {
    width: '208px',
    height: '130px',
    padding: '15px',
    marginBottom: '16px',
    cardChipWidth: '40px',
    cardChipHeight: '26px',
    cardChipMarginTop: '24px',
    cardCompanyNameHeight: '13px',
    cardCompanyNameFontSize: '10px',
    cardNumberHeight: '20px',
    cardNumberMargin: '15px 0',
    cardNumberEachMargin: '0 8px',
    cardFontSize: '14px',
  },
  [CARD_SIZE_UNIT.BIG]: {
    width: '293px',
    height: '183px',
    padding: '22px',
    marginBottom: '28px',
    cardChipWidth: '55px',
    cardChipHeight: '35px',
    cardChipMarginTop: '33px',
    cardCompanyNameHeight: '18px',
    cardCompanyNameFontSize: '14px',
    cardNumberHeight: '24px',
    cardNumberMargin: '19px 0',
    cardNumberEachMargin: '0 12px',
    cardFontSize: '17px',
  },
};

export default CARD_SIZE;
