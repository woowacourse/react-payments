import InputContainer from ".";

export default {
  title: "Input",
  component: InputContainer,
};

export const CardNumberInput = () => <InputContainer labelName="카드번호" />;

export const OwnerNameInput = () => (
  <InputContainer
    classList={["text-align-left"]}
    labelName="카드 소유자 이름(선택)"
    placeholder="카드에 표시된 이름과 동일하게 입력하세요."
  />
);
