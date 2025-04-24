import { formSectionData } from "../types";

const formUIControllerData: formSectionData[] = [
  {
    key: "uniqueNumber",
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    inputFieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
    },
  },
  {
    key: "expirationDate",
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    inputFieldData: {
      label: "유효기간",
      inputNumber: 2,
      inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
    },
  },
  {
    key: "cvcNumber",
    title: "CVC 번호를 입력해 주세요",
    description: "",
    inputFieldData: {
      label: "cvc",
      inputNumber: 1,
      inputProps: { placeholder: ["123"], maxLength: 3 },
    },
  },
  {
    key: "password",
    title: "비밀번호를 입력해 주세요",
    description: "앞의 2자리를 입력해주세요",
    inputFieldData: {
      label: "비밀번호 앞 2자리",
      inputNumber: 1,
      inputProps: { placeholder: [""], maxLength: 2 },
    },
  },
];

export default formUIControllerData;
