import styled from "@emotion/styled";
import masterCard from "../assets/Mastercard.png";
// import { splitCardNumber } from "../utils/card";
import type { CardNumberUnits, ValidityPeriod } from "../pages/AddNewCardPage";

interface CardProps {
  cardNumberUnits: CardNumberUnits;
  validityPeriod: ValidityPeriod;
}

const Card = ({ cardNumberUnits, validityPeriod }: CardProps) => {
  const { month, year } = validityPeriod;
  const CardValidityPeriodUnitString = `${+month < 10 ? "0" + month : month}/${year}`;

  return (
    <Wrapper>
      <ChipWrapper>
        <Chip />
        <MasterCardImg src={masterCard} />
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

const MasterCardImg = styled.img`
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
