import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardCVCNumberInputs from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs";
import { StyledContainer } from "./CardCVCNumberSection.css";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (type: "CVCNumber", CVCNumber: string) => void;
  CVCError: {
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
};

function CardCVCNumberSection({
  CVCNumber,
  changeCVCNumber,
  CVCError,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
        CVCError={CVCError}
      />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
