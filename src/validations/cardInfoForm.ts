import { CardNumbers, ExpiredDate, Password } from "../types";

export const checkExpiredDate = (expiredDate: ExpiredDate) => {
  const date = new Date();
  const currentYear = date.getFullYear() % 100;
  const currentMonth = date.getMonth() + 1;
  const targetYear = Number(expiredDate.year);
  const targetMonth = Number(expiredDate.month);

  if (!Object.keys(expiredDate).every(key => expiredDate[key].length === 2)) {
    throw new Error("MM/YY 형태로 입력해주세요. (예: 01/23)");
  }

  if (targetMonth < 1 || targetMonth > 12) {
    throw new Error("1월부터 12월 사이의 값을 입력해주세요.");
  }

  if (targetYear < currentYear || (targetYear === currentYear && targetMonth < currentMonth))
    throw new Error(
      `해당 만료일은 이미 지났습니다. (현재: ${currentMonth
        .toString()
        .padStart(2, "0")}/${currentYear})`
    );

  if (
    targetYear > currentYear + 5 ||
    (targetYear === currentYear + 5 && targetMonth > currentMonth)
  )
    throw new Error(
      `만료일은 현재로부터 5년이내여야합니다.  (현재: ${currentMonth
        .toString()
        .padStart(2, "0")}/${currentYear})`
    );
};

export const checkCardNumbers = (cardNumbers: CardNumbers) => {
  if (!cardNumbers.every(cardNumber => cardNumber.length === 4)) {
    throw new Error("카드 번호를 입력해주세요.");
  }
};

export const checkCardPassword = (cardPassWord: Password) => {
  if (!cardPassWord.every(password => password.length === 1)) {
    throw new Error("비밀번호를 입력해주세요.");
  }
};

export const checkSecurityCode = (securityCode: string) => {
  if (securityCode.length !== 3) {
    throw new Error("3자리의 보안코드를 입력해주세요.");
  }
};

export const checkCardUserName = (cardUserName: string) => {
  if (cardUserName.length === 0) {
    throw new Error("소유자 이름을 입력해주세요.");
  }
};
