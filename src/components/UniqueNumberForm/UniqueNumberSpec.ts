const uniqueNumberSpec = {
  title: "결제할 카드 번호를 입력해 주세요",
  description: "본인 명의의 카드만 결제 가능합니다.",
  inputFieldData: {
    label: "카드번호",
    inputNumber: 4,
    inputProps: { placeholder: ["1234", "1234", "●●●●", "●●●●"], maxLength: 4 },
  },
};

export default uniqueNumberSpec;
