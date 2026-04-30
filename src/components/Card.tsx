import styled from "@emotion/styled";
import masterCard from "../assets/Mastercard.png";
import visa from "../assets/Visa.png";
import type { CardNumberUnits } from "./CardNumberInputField";
import type { ValidityPeriod } from "./CardValidityPeriodInputField";

interface CardProps {
  cardNumberUnits: CardNumberUnits;
  validityPeriod: ValidityPeriod;
  brand?: "Visa" | "MasterCard" | null;
}

const Card = ({ cardNumberUnits, validityPeriod, brand }: CardProps) => {
  const { month, year } = validityPeriod;
  const CardValidityPeriodUnitString = `${
    month ? month + "/" : ""
  }${year ? year : ""}`;

  return (
    <Wrapper>
      <ChipWrapper>
        <Chip />
        {brand && brand === "MasterCard" ? (
          <CardBrandImg src={masterCard} />
        ) : brand === "Visa" ? (
          <CardBrandImg src={visa} />
        ) : null}
      </ChipWrapper>
      <CardNumberWrapper>
        {cardNumberUnits.map((cardNumberUnit) => (
          <CardNumberUnit>{cardNumberUnit}</CardNumberUnit>
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
  background-color: #333;
  border-radius: 0.25rem;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const ChipWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 2.25rem;
  height: 1.5rem;
  background-color: #ddcd78;
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
  color: #fff;
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
  color: #fff;
  letter-spacing: 16%;
`;

export default Card;
