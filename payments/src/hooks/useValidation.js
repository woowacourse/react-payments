import { ERROR_MESSAGE } from '../const';

const useCardInputValidation = (state) => {
  const validateCardNum = ({ cardNumber }) => {
    cardNumber.forEach((input, idx) => {
      if (input.length !== 4) {
        throw new Error(ERROR_MESSAGE.SHORT_CARD_NUMBER);
      }
    });
  };
  const validateExpireDate = ({ expiredDate }) => {
    if (expiredDate[0] > 12) {
      throw new Error(ERROR_MESSAGE.NOT_A_MONTH);
    }
    if (expiredDate[0] === '') {
      throw new Error(ERROR_MESSAGE.NO_EXPIRE_MONTH);
    }

    if (expiredDate[1] > new Date().getFullYear() + 5 - 2000) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_YEAR);
    }
    if (expiredDate[1] === '') {
      throw new Error(ERROR_MESSAGE.NO_EXPIRE_YEAR);
    }
  };

  const validateSecureCode = ({ secureCode }) => {
    if (secureCode.length < 3) {
      throw new Error(ERROR_MESSAGE.NO_SECURE_CODE);
    }
  };
  const validatePassword = ({ password }) => {
    if (password.join('').length !== 2) {
      throw new Error(ERROR_MESSAGE.NO_PASSWORD);
    }
  };

  const validateCardName = ({ cardName }) => {
    if (cardName === '') {
      throw new Error(ERROR_MESSAGE.NO_CARD_TYPE);
    }
  };

  const validateArray = [validateCardName, validateCardNum, validateExpireDate, validateSecureCode, validatePassword];

  const doValidation = (state) => {
    const { cardNumber, expiredDate, ownerName, secureCode, password } = state;

    validateArray.forEach((validateFunc) => {
      validateFunc(state);
    });

    if (
      window.confirm(`입력하신 카드정보가
            카드번호:${cardNumber.join('-')}
            카드 만료일:${expiredDate.join('/')}
            카드 소유자 이름:${ownerName === '' ? '임꺽정' : ownerName} 이
            맞습니까`)
    ) {
      alert('카드가 등록되었습니다');
    }
  };

  return { doValidation };
};

export default useCardInputValidation;
