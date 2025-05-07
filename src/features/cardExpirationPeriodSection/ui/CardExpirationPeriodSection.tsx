import SectionTitle from "../../../entities/sectionTitle/ui/SectionTitle";
import CardExpirationPeriodInputs from "../../../entities/cardExpirationPeriodInputs/ui/CardExpirationPeriodInputs";
import { ExpirationPeriodProps } from "../types/CardExpirationPeriod.types";
import { StyledContainer } from "../css/CardExpirationPeriodSection.css";

function CardExpirationPeriodSection({
  expirationPeriod,
  monthError,
  yearError,
}: ExpirationPeriodProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <CardExpirationPeriodInputs
        {...expirationPeriod}
        error={{
          month: monthError.errorMessages.month,
          year: yearError.errorMessages.year,
        }}
        monthCheckValidation={monthError.checkValidation}
        yearCheckValidation={yearError.checkValidation}
      />
    </StyledContainer>
  );
}

export default CardExpirationPeriodSection;
