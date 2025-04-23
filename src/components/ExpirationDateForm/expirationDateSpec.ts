const expirationDateSpec = {
  title: "카드 유효기간을 입력해 주세요",
  description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  inputFieldData: {
    label: "유효기간",
    inputNumber: 2,
    inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
  },
};

export default expirationDateSpec;
