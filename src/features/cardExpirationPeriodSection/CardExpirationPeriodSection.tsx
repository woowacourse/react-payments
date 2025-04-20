import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardExpirationPeriodInputs from "../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs";
import { StyledContainer } from "./CardExpirationPeriodSection.css";
import { ExpirationPeriod } from "../../\btypes/index.types";

export type ExpirationPeriodProps = {
  expirationPeriod: ExpirationPeriod;
  changeExpirationPeriod: (
    expirationPeriod: keyof ExpirationPeriod,
    date: string
  ) => void;
};

function CardExpirationPeriodSection({
  expirationPeriod,
  changeExpirationPeriod,
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
      />
    </StyledContainer>
  );
}

export default CardExpirationPeriodSection;
