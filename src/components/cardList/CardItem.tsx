import styled from "styled-components";
import { CardType, BrandType } from "../../types/card";

import Card from "../common/Card";
import { CARDNUMBERS_REGEX, DEFAULT_EXPRIYDATE, DEFAULT_NAME, DEFAULT_BRAND } from "../../constants";

import { useMemo } from "react";

interface CardProps {
  card: CardType;
  handleClick?: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;
}

const backgroundColorMap: Record<BrandType | typeof DEFAULT_BRAND, string> = {
  현대카드: "#000000",
  BC카드: "#fc6d62",
  신한카드: "#4a7cff",
  카카오뱅크: "#ffed45",
  하나카드: "#1db8b3",
  우리카드: "#1994e0",
  KB카드: "#8c8176",
  롯데카드: "#f25769",
  [DEFAULT_BRAND]: "#000000",
} as const;

const fontColorMap: Record<BrandType | typeof DEFAULT_BRAND, string> = {
  현대카드: "#FFFFFF",
  BC카드: "#FFFFFF",
  신한카드: "#FFFFFF",
  카카오뱅크: "#786b5f",
  하나카드: "#FFFFFF",
  우리카드: "#FFFFFF",
  KB카드: "#FFFFFF",
  롯데카드: "#FFFFFF",
  [DEFAULT_BRAND]: "#FFFFFF",
} as const;

export const CardItem = ({ card, handleClick }: CardProps) => {
  const { numbers, expiryDate, owner = DEFAULT_NAME, brand = DEFAULT_BRAND } = card;

  const memorizedNumbers = useMemo((): string => {
    const shownNumbers = card.numbers.slice(0, 8);
    return (shownNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
  }, [card.numbers]);

  const memorizedHideNumbers = useMemo((): string => {
    const hiddenNumbers = "●".repeat(card.numbers.slice(8).length);
    return (hiddenNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
  }, [card.numbers]);

  const memoizedName = useMemo(() => {
    return card.owner ? card.owner : DEFAULT_NAME;
  }, [card.owner]);

  const memoizedExpiryDate = useMemo(() => {
    return card.expiryDate ? card.expiryDate : DEFAULT_EXPRIYDATE;
  }, [card.expiryDate]);

  return (
      <Container $color={fontColorMap[brand]} onClick={handleClick}>
        <IcChip />
        <Numbers>
          <ShownNumbers>{memorizedNumbers}</ShownNumbers>
          <HiddenNumbers>{memorizedHideNumbers}</HiddenNumbers>
        </Numbers>
        <InfoWrapper>
          <Name>{memoizedName}</Name>
          <ExpiryDate>{memoizedExpiryDate}</ExpiryDate>
        </InfoWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  height: 100px;
  color: white;

  font-size: 10px;
  font-weight: 500;

  gap: 4px;
  white-space: pre;
`;

const IcChip = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;
  margin-top: 32px;
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
