import styled from "@emotion/styled";
import type { CardBrand, CardNumberSegments } from "../types";
import Flex from "./Common/Flex";

const CardContainer = styled(Flex)`
  margin: 45px 0;
  width: 100%;
`;

const Card = styled(Flex)`
  width: 212px;
  height: 132px;
  background-color: var(--color-card-background);
  color: var(--color-white);
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  padding: 8px 12px;
`;

const CardImage = styled.img`
  width: 36px;
  height: 22px;
`;

const CardText = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 8%;
`;

interface CardPreviewProps {
  cardBrand: CardBrand;
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
}

function CardPreview(props: CardPreviewProps) {
  return (
    <CardContainer justifyContent="center">
      <Card direction="column" gap={14}>
        <Flex justifyContent="space-between">
          <CardImage src={`${import.meta.env.BASE_URL}chip.svg`} />
          {props.cardBrand && (
            <CardImage
              src={`${import.meta.env.BASE_URL}${props.cardBrand.toLowerCase()}.svg`}
            />
          )}
        </Flex>
        <Flex gap={10}>
          {props.cardNumberSegments.map((segments: string, index: number) => (
            <CardText key={index}>
              {index < 2 ? segments : segments.replaceAll(/./g, "•")}
            </CardText>
          ))}
        </Flex>
        <CardText>
          {props.expiryMonth}
          {!!props.expiryYear.length && "/"}
          {props.expiryYear}
        </CardText>
      </Card>
    </CardContainer>
  );
}

export default CardPreview;
