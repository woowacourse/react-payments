import useInput from './useInput';

const USER_NAME_CONDITION = /^[A-Z]+\s[A-Z]+$/;
export const USER_NAME_ERROR_MESSAGE = '성과 이름을 띄어쓰기를 포함한 대문자로만 입력해주세요.';

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName, userNameError] = useInput(defaultValue, USER_NAME_CONDITION);

  return { userNameState: { userName, setUserName, userNameError } };
};

export default useUserName;
