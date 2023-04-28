import useInput from "../useInput";

const nickNameValidator = (inputValue: string) => {
  if (inputValue.length > 10) throw new Error("10자 이내로 입력해주세요");
};

const useNickName = () => {
  const { inputValue, onChange, errorMessage } = useInput(nickNameValidator);

  return { nickName: inputValue, onChangeNickName: onChange, errorMessage };
};

export default useNickName;
