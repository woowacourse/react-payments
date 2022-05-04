import { ERROR_MESSAGE } from '../const';

const useNextButton = (inputStates, setVisible) => {
  const validateCardNum = ({ cardNumber }) => {
    cardNumber.forEach((input) => {
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

  const nextButtonClick = (e) => {
    try {
      doValidation(inputStates);
    } catch (error) {
      alert(error.message);
      switch (error.message) {
        case ERROR_MESSAGE.SHORT_CARD_NUMBER:
          inputStates.cardNumber.some((input, idx) => {
            if (input.length !== 4) {
              e.currentTarget.parentNode[idx].focus();
              return true;
            }
          });
          return;
        case ERROR_MESSAGE.NOT_A_MONTH:
          e.currentTarget.parentNode[4].focus();
          return;
        case ERROR_MESSAGE.NO_EXPIRE_MONTH:
          e.currentTarget.parentNode[4].focus();
          return;
        case ERROR_MESSAGE.OUT_OF_RANGE_YEAR:
          e.currentTarget.parentNode[5].focus();
          return;
        case ERROR_MESSAGE.NO_EXPIRE_YEAR:
          e.currentTarget.parentNode[5].focus();
          return;
        case ERROR_MESSAGE.NO_SECURE_CODE:
          e.currentTarget.parentNode[7].focus();
          return;
        case ERROR_MESSAGE.NO_PASSWORD:
          inputStates.password.some((input, idx) => {
            if (input === '') {
              e.currentTarget.parentNode[9 + idx].focus();
              return true;
            }
          });
          return;
        case ERROR_MESSAGE.NO_CARD_TYPE:
          setVisible(true);
          return;
        default:
          return;
      }
    }
  };

  return { nextButtonClick };
};

export default useNextButton;
