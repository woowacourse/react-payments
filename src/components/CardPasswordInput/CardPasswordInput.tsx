import InputContainer from '../InputContainer/InputContainer';

type CardPasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const CardPasswordInput = ({
  password,
  setPassword,
}: CardPasswordInputProps) => {
  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <InputContainer
      title="비밀번호를 입력해 주세요"
      subTitle="앞의 2자리를 입력해주세요"
    >
      <h4>비밀번호 앞 2자리</h4>
      <div>
        <input
          type="password"
          value={password}
          onChange={updatePassword}
          name="password"
          maxLength={2}
        />
      </div>
    </InputContainer>
  );
};

export default CardPasswordInput;
