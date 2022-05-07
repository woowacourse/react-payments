const MASKED_CHARACTER = '•';

const CREATE_MASKED_CHARACTERS = repeatCount => `${MASKED_CHARACTER} `.repeat(repeatCount).trim();

const ADD_CARD_FORM_CONDITION = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
};

const ADD_CARD_FORM_SUBMIT_CONFIRM_MESSAGE = (cardNumber, expireDate, holderName) => `
  카드번호: ${cardNumber.join(' - ')}
  만료일: ${expireDate.join('/')}
  소유자: ${holderName}

  위 정보로 카드를 등록하시겠습니까?
`;

const ADD_CARD_FORM_ERROR_MESSAGE = {
  CARD_NUMBER: '16자리 숫자를 입력하세요.',
  EXPIRE_DATE: '월/년도 두 자리씩 (MM/YY) 형식을 지켜주세요.',
  HOLDER_NAME: '30자 이내, 영어로 입력하세요.',
  SECURITY_CODE: '세 자리 숫자를 입력하세요.',
  PASSWORD: '두 자리 숫자를 입력하세요.',
};

export {
  CREATE_MASKED_CHARACTERS,
  ADD_CARD_FORM_CONDITION,
  ADD_CARD_FORM_SUBMIT_CONFIRM_MESSAGE,
  ADD_CARD_FORM_ERROR_MESSAGE,
};
