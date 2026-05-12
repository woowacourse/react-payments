import type { ValidityPeriod } from "@/types/card";
import AMEX from "@assets/AMEX.png";
import Diners from "@assets/Diners.png";
import masterCard from "@assets/Mastercard.png";
import UnionPay from "@assets/UnionPay.png";
import visa from "@assets/Visa.png";
import SwitchCase from "@components/common/SwitchCase";
import type CARD from "@constants/card";
import type { CardBrand } from "@constants/card";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@styles/colorPalette";
import {
  formatCardNumberUnitByBrand,
  getFormattedValidityPeriodUnit,
} from "@utils/card";

interface CardProps {
  cardNumber: string;
  validityPeriod: ValidityPeriod;
  brand: CardBrand | null;
  company?: (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"] | null;
}

const Card = ({ cardNumber, validityPeriod, brand, company }: CardProps) => {
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
            {
              case: "Diners",
              component: <CardBrandImg src={Diners} alt="Diners" />,
            },
            {
              case: "AMEX",
              component: <CardBrandImg src={AMEX} alt="AMEX" />,
            },
            {
              case: "UnionPay",
              component: <CardBrandImg src={UnionPay} alt="UnionPay" />,
            },
          ]}
          defaultCase={null}
        />
      </ChipWrapper>
      <CardNumberWrapper>
        {formatCardNumberUnitByBrand(cardNumber, brand).map(
          (cardNumberUnit, index) => (
            <CardNumberUnit key={index}>
              {index < 2 ? cardNumberUnit : "*".repeat(cardNumberUnit.length)}
            </CardNumberUnit>
          ),
        )}
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
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-top: 0.875rem;
`;

const CardNumberUnit = styled.p`
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: ${COLOR_PALETTE.WHITE};
  letter-spacing: 16%;
  text-align: center;
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
