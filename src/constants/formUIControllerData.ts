import { formSectionData } from "../types";
import {
  CVC_NUMBER_MAX_LENGTH,
  EXPIRATION_DATE_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  UNIQUE_NUMBER_MAX_LENGTH,
} from "./constant";

const formUIControllerData: formSectionData[] = [
  {
    key: "uniqueNumber",
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    type: "input",
    fieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: UNIQUE_NUMBER_MAX_LENGTH },
    },
  },
  {
    key: "company",
    title: "카드사를 선택해 주세요",
    description: "현재 국내 카드사만 가능합니다.",
    type: "select",
    fieldData: {
      options: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
      placeholder: "카드사를 선택해주세요",
    },
  },
  {
    key: "expirationDate",
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    type: "input",
    fieldData: {
      label: "유효기간",
      inputNumber: 2,
      inputProps: { placeholder: ["MM", "YY"], maxLength: EXPIRATION_DATE_MAX_LENGTH },
    },
  },
  {
    key: "cvcNumber",
    title: "CVC 번호를 입력해 주세요",
    description: "",
    type: "input",
    fieldData: {
      label: "cvc",
      inputNumber: 1,
      inputProps: { placeholder: ["123"], maxLength: CVC_NUMBER_MAX_LENGTH },
    },
  },
  {
    key: "password",
    title: "비밀번호를 입력해 주세요",
    description: "앞의 2자리를 입력해주세요",
    type: "input",
    fieldData: {
      label: "비밀번호 앞 2자리",
      inputNumber: 1,
      inputProps: { placeholder: [""], maxLength: PASSWORD_MAX_LENGTH, masking: true },
    },
  },
];

export default formUIControllerData;
