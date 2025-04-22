import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardExpirationPeriodInputs from "../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs";
import { StyledContainer } from "./CardExpirationPeriodSection.css";
import { ExpirationPeriod } from "../../\btypes/index.types";

export type ExpirationPeriodProps = {
  expirationPeriod: Record<ExpirationPeriod, string>;
  changeExpirationPeriod: (
    expirationPeriod: ExpirationPeriod,
    date: string
  ) => void;
  monthError: Record<"month", string>;
  checkMonthValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "month";
  }) => void;
  getMonthErrorMessage: () => string | undefined;
  yearError: Record<"year", string>;
  checkYearValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "year";
  }) => void;
  getYearErrorMessage: () => string | undefined;
};

function CardExpirationPeriodSection({
  expirationPeriod,
  changeExpirationPeriod,
  monthError,
  checkMonthValidation,
  getMonthErrorMessage,
  yearError,
  checkYearValidation,
  getYearErrorMessage,
}: ExpirationPeriodProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <CardExpirationPeriodInputs
        expirationPeriod={expirationPeriod}
        changeExpirationPeriod={changeExpirationPeriod}
        monthError={monthError}
        checkMonthValidation={checkMonthValidation}
        getMonthErrorMessage={getMonthErrorMessage}
        yearError={yearError}
        checkYearValidation={checkYearValidation}
        getYearErrorMessage={getYearErrorMessage}
      />
    </StyledContainer>
  );
}

export default CardExpirationPeriodSection;
