import type { PostedCard } from '../../../domain/card/types/card';
import { getCardBrandName } from '../../../domain/card/utils/cardDisplay';

type PostCardError = {
  code: 'INVALID_CARD_NUMBER' | 'INVALID_EXPIRATION_DATE' | 'INVALID_CVC';
  message: string;
};

export const validatePostedCard = (card: PostedCard): PostCardError | null => {
  if (getCardBrandName(card.number.match(/.{1,4}/g) ?? []) === null) {
    return {
      code: 'INVALID_CARD_NUMBER',
      message: '유효하지 않은 카드 번호입니다.',
    };
  }

  const [month, year] = card.expirationDate.split('/');
  if (Number(month) < 0 || Number(month) > 12 || Number(year) < 25) {
    return {
      code: 'INVALID_EXPIRATION_DATE',
      message: '유효하지 않은 만료일입니다.',
    };
  }

  if (card.cvc === '000') {
    return {
      code: 'INVALID_CVC',
      message: '유효하지 않은 CVC입니다.',
    };
  }

  return null;
};
