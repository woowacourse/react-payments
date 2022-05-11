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
    } else {
      throw new Error('취소하였습니다');
    }
  };

  const nextButtonClick = (e) => {
    const formElement = e.currentTarget.parentNode.parentNode;
    try {
      doValidation(inputStates);
    } catch (error) {
      switch (error.message) {
        case ERROR_MESSAGE.SHORT_CARD_NUMBER:
          inputStates.cardNumber.some((input, idx) => {
            if (input.length !== 4) {
              formElement[idx].focus();
              return true;
            }
          });
          throw error;
        case ERROR_MESSAGE.NOT_A_MONTH:
          formElement[4].focus();
          throw error;
        case ERROR_MESSAGE.NO_EXPIRE_MONTH:
          formElement[4].focus();
          throw error;
        case ERROR_MESSAGE.OUT_OF_RANGE_YEAR:
          formElement[5].focus();
          throw error;
        case ERROR_MESSAGE.NO_EXPIRE_YEAR:
          formElement[5].focus();
          throw error;
        case ERROR_MESSAGE.NO_SECURE_CODE:
          formElement[7].focus();
          throw error;
        case ERROR_MESSAGE.NO_PASSWORD:
          inputStates.password.some((input, idx) => {
            if (input === '') {
              formElement[9 + idx].focus();
              return true;
            }
          });
          throw error;
        case ERROR_MESSAGE.NO_CARD_TYPE:
          setVisible(true);
          throw error;
        default:
          throw error;
      }
    }
  };

  return { nextButtonClick };
};

export default useNextButton;
