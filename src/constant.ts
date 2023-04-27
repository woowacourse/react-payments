import BC from "../src/asset/bc_logo.svg"
import HYUNDAI from "../src/asset/hyundai_logo.svg"
import HANA from "../src/asset/hana_logo.svg"
import KAKAO from "../src/asset/kakao_logo.svg"
import KOOKMIN from "../src/asset/kookmin_logo.svg"
import LOTTE from "../src/asset/lotte_logo.svg"
import SINHAN from "../src/asset/sinhan_logo.svg"
import WOORI from "../src/asset/woori_logo.svg"

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

export const REGEX_PATTERN = {
  CARD_NUMBER: "^\\d{4}$",
  CVC: "^\\d{3}$",
  MONTH: "^0[1-9]|1[0-2]$",
  YEAR: "^2[3-8]$",
  OWNER: "^[a-zA-Z]{0,30}$",
  PASSWORD: "^[0-9]$"
}

export interface CardCompanyData {
  src: string;
  title: string;
  color: string;
  backgroundColor: string;
}

type CardCompanys = {
  [key: string]: CardCompanyData
};

export const CARD_COMPANYS: CardCompanys = {
  BC: {
    src: BC,
    title: 'BC카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  HYUNDAI: {
    src: HYUNDAI,
    title: '현대카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  HANA: {
    src: HANA,
    title: '하나카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  KAKAO: {
    src: KAKAO,
    title: '카카오뱅크',
    color: '#FFF',
    backgroundColor: '#333',
  },
  KOOKMIN: {
    src: KOOKMIN,
    title: '국민카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  LOTTE: {
    src: LOTTE,
    title: '롯데카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  SINHAN: {
    src: SINHAN,
    title: '신한카드',
    color: '#FFF',
    backgroundColor: '#333',
  },
  WOORI: {
    src: WOORI,
    title: '우리카드',
    color: '#FFF',
    backgroundColor: '#333',
  }
};