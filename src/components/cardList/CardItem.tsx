import Card from "../common/Card";
import styled from "styled-components";

import { useMemo } from "react";

import { CardType, BrandType } from "../../types/card";
import { CARDNUMBERS_REGEX, DEFAULT_EXPRIYDATE, DEFAULT_NAME, DEFAULT_BRAND } from "../../constants";

interface CardProps {
  card: CardType;
  handleClick?: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;
}

const CardItem = ({ card, handleClick }: CardProps) => {
  const { numbers, expiryDate, owner = DEFAULT_NAME, brand = DEFAULT_BRAND } = card;

  const memorizedNumbers = useMemo((): string => {
    const shownNumbers = numbers.slice(0, 8);
    return (shownNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
  }, [numbers]);

  const memorizedHideNumbers = useMemo((): string => {
    const hiddenNumbers = "●".repeat(numbers.slice(8).length);
    return (hiddenNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
  }, [numbers]);

  const memoizedExpiryDate = useMemo(() => {
    return expiryDate ? expiryDate : DEFAULT_EXPRIYDATE;
  }, [expiryDate]);

  return (
    <Card $backgroundColor={backgroundColorMap[brand]}>
      <Container $color={fontColorMap[brand]} onClick={handleClick}>
        <Brand>{brand}</Brand>
        <IcChip />
        <Numbers>
          <ShownNumbers>{memorizedNumbers}</ShownNumbers>
          <HiddenNumbers>{memorizedHideNumbers}</HiddenNumbers>
        </Numbers>
        <InfoWrapper>
          <Name>{owner}</Name>
          <ExpiryDate>{memoizedExpiryDate}</ExpiryDate>
        </InfoWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 183px;
  height: 100px;

  font-size: 10px;
  font-weight: 500;
  color: ${(props) => props.$color};

  white-space: pre;
`;

const IcChip = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;

  margin-top: 17px;
`;

const Brand = styled.div`
  font-size: 11px;
  font-weight: 400;
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;

  margin-top: 7px;
`;

const ShownNumbers = styled.div`
  text-align: center;
  height: 15px;

  margin-left: 2px;

  font-size: 11px;
  letter-spacing: 3px;
`;

const HiddenNumbers = styled.div`
  height: 15px;
  padding-top: 2px;

  font-size: 10px;
  letter-spacing: 3.5px;

  margin-left: 11px;
  zoom: 0.8;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 110px;
  height: 11px;

  margin-left: 2px;

  font-size: 11px;
`;

const ExpiryDate = styled.div`
  margin-right: 2px;
  font-size: 11px;
`;

export default CardItem;
