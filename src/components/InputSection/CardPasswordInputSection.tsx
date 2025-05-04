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
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
};

const CardPasswordInputSection = ({
  cardPassword,
  handleCardPasswordChange,
  isError,
  errorMessage,
  setRef,
}: CardPasswordInputSectionProps) => {
  return (
    <>
      <InputSection
        title="비밀번호를 입력해주세요"
        description="앞의 2자리를 입력해주세요"
        subtitle="비밀번호 앞 2자리"
      >
        <InputField
          id={8}
          type="password"
          value={cardPassword}
          onChange={handleCardPasswordChange}
          isError={isError.cardPassword}
          placeholder="**"
          setRef={setRef}
        />
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardPasswordInputSection;
