import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardCVCNumberInputs from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs";
import { StyledContainer } from "./CardCVCNumberSection.css";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (type: "CVCNumber", CVCNumber: string) => void;
  error: Record<"CVCNumber", string>;
  checkValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "CVCNumber";
  }) => void;
  getErrorMessage: () => string | undefined;
};

function CardCVCNumberSection({
  CVCNumber,
  changeCVCNumber,
  error,
  checkValidation,
  getErrorMessage,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
        error={error}
        checkValidation={checkValidation}
        getErrorMessage={getErrorMessage}
      />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
