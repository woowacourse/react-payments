import { getFormattedValidityPeriodUnit } from "@utils/card";
import masterCard from "@assets/Mastercard.png";
import visa from "@assets/Visa.png";
import maskingImg from "@assets/MaskingImg.png";
import type { CardNumberUnits } from "@/components/CardNumberInputField/CardNumberInputField";
import type { ValidityPeriod } from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import SwitchCase from "@components/common/SwitchCase";
import styled from "@emotion/styled";
import { detectCardBrand } from "@utils/card";
import { COLOR_PALETTE } from "@/styles/colorPalette";

interface CardProps {
  cardNumberUnits: CardNumberUnits;
  validityPeriod: ValidityPeriod;
  brand?: ReturnType<typeof detectCardBrand>;
}

export type CardBrand = "Visa" | "MasterCard";

const Card = ({ cardNumberUnits, validityPeriod, brand }: CardProps) => {
  const CardValidityPeriodUnitString =
    getFormattedValidityPeriodUnit(validityPeriod);

  return (
    <Wrapper>
      <ChipWrapper>
        <Chip />
        <SwitchCase
          value={brand}
          caseBy={[
            {
              case: "MasterCard",
              component: <CardBrandImg src={masterCard} alt="MasterCard" />,
            },
            {
              case: "Visa",
              component: <CardBrandImg src={visa} alt="Visa" />,
            },
          ]}
          defaultCase={null}
        />
      </ChipWrapper>
      <CardNumberWrapper>
        {cardNumberUnits.map((cardNumberUnit, index) => (
          <CardNumberUnit key={index}>
            {index < 2
              ? cardNumberUnit
              : Array.from({ length: cardNumberUnit.length }).map(
                  (_, index) => (
                    <MaskingImg key={index} src={maskingImg} alt="MaskingImg" />
                  ),
                )}
          </CardNumberUnit>
        ))}
      </CardNumberWrapper>
      <CardValidityPeriodWrapper>
        <CardValidityPeriodUnit>
          {CardValidityPeriodUnitString}
        </CardValidityPeriodUnit>
      </CardValidityPeriodWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 13rem;
  height: 8rem;
  background-color: ${COLOR_PALETTE["BLACK-800"]};
  border-radius: 0.25rem;
  box-shadow: 3px 3px 5px 0px ${COLOR_PALETTE["BLACK-900"]}40;
`;

const ChipWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 2.25rem;
  height: 1.5rem;
  background-color: ${COLOR_PALETTE.YELLOW};
  border-radius: 0.2rem;
`;

const CardBrandImg = styled.img`
  width: 2.25rem;
  height: 1.5rem;
`;

const CardNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-top: 0.875rem;
`;

const CardNumberUnit = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: ${COLOR_PALETTE.WHITE};
  letter-spacing: 16%;
`;

const MaskingImg = styled.img`
  width: 0.25rem;
  height: 0.25rem;
`;

const CardValidityPeriodWrapper = styled.div`
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const CardValidityPeriodUnit = styled.span`
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: ${COLOR_PALETTE.WHITE};
  letter-spacing: 16%;
`;

export default Card;
