import type { CardNumber, CardPassword, ExpirationDate, SecurityCode } from '../components/Common/Card/types';

export const checkCardNumber = (cardNumber: CardNumber) => {
  if (cardNumber.join('').length !== 16) {
    throw new Error('카드 번호 16자를 전부 기입했는지 다시 확인해 주세요.');
  }
};

export const checkExpirationDate = (expirationDate: ExpirationDate) => {
  const [month, year] = expirationDate;
  const now = new Date();
  const nowYear = now.getFullYear() % 100;
  const nowMonth = now.getMonth() + 1;

  const isValidDate = () => {
    if (nowYear > Number(year)) {
      return false;
    }
    if (nowYear === Number(year) && nowMonth > Number(month)) {
      return false;
    }
    return true;
  };

  if (Number(month) > 12 || Number(month) < 1) {
    throw new Error('만료 날짜(월)를 다시 확인해주세요.');
  }

  if (!isValidDate()) {
    throw new Error('만료 날짜가 지났습니다.');
  }
};

export const checkSecurityCode = (securityCode: SecurityCode) => {
  if (securityCode.join('').length !== 3) {
    throw new Error('CVC/CVV코드 3자를 전부 기입했는지 다시 확인해 주세요.');
  }
};

export const checkPassword = (password: CardPassword) => {
  if (password.join('').length !== 2) {
    throw new Error('비밀번호 앞자리 2자를 전부 기입했는지 다시 확인해 주세요.');
  }
};
