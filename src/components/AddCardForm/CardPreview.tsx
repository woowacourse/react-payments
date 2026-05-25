import styled from '@emotion/styled';
import type { CardExpiryDate, CardIssuer, CardNetwork, CardNumberSegments } from '../../types';
import Flex from '../Common/Flex';
import { UNMASKED_CARD_NUMBER_SEGMENT_COUNT } from '../../constants';

const CardContainer = styled(Flex)`
  margin: var(--spacing-45) 0;
  width: 100%;
`;

const Card = styled(Flex)<{ issuer?: CardIssuer }>`
  width: 212px;
  height: 132px;
  color: var(--color-white);
  border-radius: var(--radius-m);
  box-shadow: 3px 3px 5px 0 #00000040;
  padding: var(--spacing-8) var(--spacing-12);
  ${(props) => `background-color: var(--color-card-${props.issuer ?? 'background'}, var(--color-card-background));`}
`;

const CardImage = styled.img`
  width: 36px;
  height: 22px;
`;

const CardText = styled.span`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  letter-spacing: 8%;
`;

interface CardPreviewProps {
  issuer?: CardIssuer;
  network?: CardNetwork;
  numberSegments: CardNumberSegments;
  expiryDate: CardExpiryDate;
}

function CardPreview(props: CardPreviewProps) {
  return (
    <CardContainer justifyContent="center">
      <Card issuer={props.issuer} direction="column" gap={14}>
        <Flex justifyContent="space-between">
          <CardImage alt="Card IC Chip" src={`${import.meta.env.BASE_URL}chip.svg`} />
          {props.network && (
            <CardImage alt="Card Brand" src={`${import.meta.env.BASE_URL}${props.network.toLowerCase()}.svg`} />
          )}
        </Flex>
        <Flex gap={10}>
          {props.numberSegments.map((segment: string, index: number) => (
            <CardText key={index}>
              {index < UNMASKED_CARD_NUMBER_SEGMENT_COUNT ? segment : segment.replaceAll(/./g, '•')}
            </CardText>
          ))}
        </Flex>
        <CardText>
          {props.expiryDate[0]}
          {!!props.expiryDate[1].length && '/'}
          {props.expiryDate[1]}
        </CardText>
      </Card>
    </CardContainer>
  );
}

export default CardPreview;
