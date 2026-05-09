import type { CardNumberUnits, ValidityPeriod } from "@/types/card";
import masterCard from "@assets/Mastercard.png";
import visa from "@assets/Visa.png";
import SwitchCase from "@components/common/SwitchCase";
import type CARD_COMPANY_SELECT_FIELD from "@constants/card";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@styles/colorPalette";
import { detectCardBrand, getFormattedValidityPeriodUnit } from "@utils/card";

interface CardProps {
  cardNumberUnits: CardNumberUnits;
  validityPeriod: ValidityPeriod;
  brand?: ReturnType<typeof detectCardBrand>;
  company?: (typeof CARD_COMPANY_SELECT_FIELD)[number]["value"] | null;
}

const Card = ({
  cardNumberUnits,
  validityPeriod,
  brand,
  company,
}: CardProps) => {
  const CardValidityPeriodUnitString =
    getFormattedValidityPeriodUnit(validityPeriod);

  return (
    <Wrapper company={company}>
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
            {index < 2 ? cardNumberUnit : "*".repeat(cardNumberUnit.length)}
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

const Wrapper = styled.div<Pick<CardProps, "company">>`
  width: 13rem;
  height: 8rem;
  background-color: ${({ company }) =>
    company
      ? COLOR_PALETTE[company.toUpperCase() as keyof typeof COLOR_PALETTE]
      : COLOR_PALETTE["BLACK-800"]};
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
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: ${COLOR_PALETTE.WHITE};
  letter-spacing: 16%;
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
