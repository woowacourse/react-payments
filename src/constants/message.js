const MESSAGE = {
  CARD: {
    FORM_VALIDATE: {
      INVALID_EXPIRY_DATE: '유효하지 않은 만료일입니다',
      REQUIRE_NUMBER_ONLY: '숫자만 입력해주세요',
      NUMBER_NOT_ENTERED_HALF: '카드번호 앞 8자리를 먼저 입력해주세요',
    },
    ADD: {
      COMPLETE: '카드 등록이 완료되었습니다',
      FAILED: '카드를 추가하지 못했어요! 다시 시도해주세요',
    },
    DELETE: {
      CONFIRM: '카드를 정말로 삭제하시겠어요?',
    },
  },
  NICKNAME: {
    HEADER: '변경할 별칭을 입력해주세요',
    EDIT: {
      FAILED: '닉네임을 변경하는 데 문제가 생겼어요! 잠시 후에 다시 시도해주세요!',
    },
    SUBMIT: {
      FAILED: '카드는 등록되었지만 닉네임을 설정하지 못했어요! 추후에 닉네임을 수정해주세요',
    },
  },
  TOOLTIP: {
    CVC: '카드 뒷면의 3자리 숫자를 입력해주세요',
  },
  ERROR_PAGE: {
    DEFAULT: '문제가 있는 것 같아요!\n잠시 후에 다시 시도해주세요!',
    CARD_LIST: '카드 목록을 불러오는 데 문제가 생겼어요!\n잠시 후에 다시 시도해주세요!',
  },
};

export default MESSAGE;
