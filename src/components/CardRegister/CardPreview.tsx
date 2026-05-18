import styled from "@emotion/styled";
import Flex from "../Common/Flex";
import type { CardBrand, CardNumberSegments } from "../../types";

const CardContainer = styled(Flex)`
  margin: 45px 0;
  width: 100%;
`;

const Card = styled(Flex)<{ $backgroundColor?: string }>`
  width: 212px;
  height: 132px;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#111111"};
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

const CardCompanyName: Record<string, string> = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: " #6A6056",
};

interface CardPreviewProps {
  cardBrand: CardBrand | undefined;
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
  cardCompany: string;
}

function CardPreview(props: CardPreviewProps) {
  return (
    <CardContainer justifyContent="center">
      <Card
        $backgroundColor={CardCompanyName[props.cardCompany]}
        direction="column"
        gap={14}
      >
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
