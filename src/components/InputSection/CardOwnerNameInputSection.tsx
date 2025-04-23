import useCardCVCNumber from "../../hooks/useCardCVCNumber";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";

type CardOwnerNameInputSectionProps = {
  cardOwnerName: string;
  handleCardOwnerNameChange: (value: string) => void;
};

const CardOwnerNameInputSection = ({
  cardOwnerName,
  handleCardOwnerNameChange,
}: CardOwnerNameInputSectionProps) => {
  return (
    <>
      <InputSection
        title="카드 소유자 이름을 입력해 주세요"
        description=""
        subtitle="소유자 이름"
      >
        <InputField
          value={cardOwnerName}
          onChange={handleCardOwnerNameChange}
          placeholder="홍길동"
        ></InputField>
      </InputSection>
    </>
  );
};

export default CardOwnerNameInputSection;
