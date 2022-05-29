const MASKED_CHARACTER = '•';

const CREATE_MASKED_CHARACTERS = (repeatCount: number) => `${MASKED_CHARACTER} `.repeat(repeatCount).trim();

const ADD_CARD_FORM_CONDITION = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
};

const CONFIRM_MESSAGE = {
  ADD_CARD_FORM_SUBMIT: (cardNumber: string[], expireDate: string[], holderName: string): string => `
    카드번호: ${cardNumber.join(' - ')}
    만료일: ${expireDate.join('/')}
    소유자: ${holderName}

    위 정보로 카드를 등록하시겠습니까?
  `,

  ADD_CARD_WITH_NO_NICKNAME: '닉네임을 지정하지 않고 카드를 등록하시겠습니까?',
  ADD_CARD_WITH_NICKNAME: (nickName: string) => `[${nickName}](으)로 카드 닉네임을 등록하시겠습니까?`,

  KEEP_NO_NICKNAME: '닉네임이 없는 상태를 유지하시겠습니까?',
  KEEP_REGISTERED_NICKNAME: (nickName: string) => `기존 닉네임 [${nickName}]을 유지하시겠습니까?`,

  UPDATE_NICKNAME: (nickName: string) => `[${nickName}](으)로 카드 닉네임을 수정하시겠습니까?`,
};

const ADD_CARD_FORM_ERROR_MESSAGE = {
  CARD_NUMBER: '16자리 숫자를 입력하세요.',
  EXPIRE_DATE: '월/년도 두 자리씩 (MM/YY) 형식을 지켜주세요.',
  HOLDER_NAME: '30자 이내, 영어로 입력하세요.',
  SECURITY_CODE: '세 자리 숫자를 입력하세요.',
  PASSWORD: '두 자리 숫자를 입력하세요.',
};

export { CREATE_MASKED_CHARACTERS, ADD_CARD_FORM_CONDITION, CONFIRM_MESSAGE, ADD_CARD_FORM_ERROR_MESSAGE };
