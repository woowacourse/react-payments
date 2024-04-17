import useInput from './useInput';

const useUserName = (defaultValue: string | undefined) => {
  const [userName, setUserName] = useInput(defaultValue);

  return { userNameState: { userName, setUserName } };
};

export default useUserName;
