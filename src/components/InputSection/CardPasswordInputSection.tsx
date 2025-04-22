import InputSection from "../common/InputSection/InputSection";
import InputField from "../common/InputField/InputField";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";

const CardPasswordInputSection = ({
  cardPassword,
  handleCardPasswordChange,
  isError,
  errorMessage,
}) => {
  console.log(cardPassword);
  return (
    <>
      <InputSection
        title="비밀번호를 입력해주세요"
        description="앞의 2자리를 입력해주세요"
        subtitle="비밀번호 앞 2자리"
      >
        <InputField
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
