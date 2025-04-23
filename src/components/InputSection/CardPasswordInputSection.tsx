import InputSection from "../common/InputSection/InputSection";
import InputField from "../common/InputField/InputField";

import ErrorMessage from "../common/ErrorMessage/ErrorMessage";

type CardPasswordInputSectionProps = {
  cardPassword: string;
  handleCardPasswordChange: (value: string) => void;
  isError: {
    cardPassword: boolean;
  };
  errorMessage: string;
};

const CardPasswordInputSection = ({
  cardPassword,
  handleCardPasswordChange,
  isError,
  errorMessage,
}: CardPasswordInputSectionProps) => {
  return (
    <>
      <InputSection
        title="비밀번호를 입력해주세요"
        description="앞의 2자리를 입력해주세요"
        subtitle="비밀번호 앞 2자리"
      >
        <InputField
          type="password"
          value={cardPassword}
          onChange={handleCardPasswordChange}
          isError={isError.cardPassword}
          placeholder="**"
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardPasswordInputSection;
