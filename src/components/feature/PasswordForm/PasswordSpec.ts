const passwordSpec = {
  title: "비밀번호를 입력해 주세요",
  description: "앞의 2자리를 입력해주세요",
  inputFieldData: {
    label: "비밀번호 앞 2자리",
    inputNumber: 1,
    inputProps: { placeholder: ["**"], maxLength: 2 },
  },
};

export default passwordSpec;
