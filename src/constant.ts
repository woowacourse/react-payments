export const LOCAL_STORAGE_CARD_KEY = "cardList";

interface ErrorMessage {
  [key: string]: string;
}

export const ERROR_MESSAGE: ErrorMessage = {
  firstCardNumber: "0부터 9까지 숫자로 이루어진 4자리를 입력해주세요",
  secondCardNumber: "0부터 9까지 숫자로 이루어진 4자리를 입력해주세요",
  thirdCardNumber: "0부터 9까지 숫자로 이루어진 4자리를 입력해주세요",
  fourthCardNumber: "0부터 9까지 숫자로 이루어진 4자리를 입력해주세요",
  cvc: "0부터 9까지 숫자로 이루어진 3자리를 입력해주세요",
  month: "01부터 12까지의 숫자만 입력가능합니다",
  year: "23부터 28까지 숫자만 입력가능합니다",
  owner: "30글자 이하 영어로 이름을 입력해주세요",
  firstPassword: "0부터 9까지의 숫자 중 하나를 입력해주세요",
  secondPassword: "0부터 9까지의 숫자 중 하나를 입력해주세요",
  LONG_INPUT: "글자수 제한을 확인해주세요",
}