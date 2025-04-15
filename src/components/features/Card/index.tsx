import { css } from '@emotion/css';
import { Text } from '../../common/Text';
import { StyledCardContainer, StyledCardTypeIcon, StyledICCheapContainer } from './Card.styled';

type Props = {
  type: 'VISA' | 'MASTER';
  cardNumbers: number[];
  expireDate: string;
};

export const Card = ({ type, cardNumbers, expireDate }: Props) => {
  const cardTypeSrc = type === 'VISA' ? '/images/Visa.png' : '/images/Master.png';
  return (
    <StyledCardContainer>
      <StyledICCheapContainer />
      {/* <StyledCardBackground src="./images/CardPreview.png" alt="cardBackground" /> */}
      <StyledCardTypeIcon src={cardTypeSrc} alt="cardType" />
      {/* TODO: flex components */}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 300px;
          height: 100%;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 10px;
          `}
        >
          {cardNumbers.map((number, index) => (
            <Text variant="Title" fontWeight="regular" color="white" key={`${number}-${index}`}>
              {number}
            </Text>
          ))}
        </div>
        <Text variant="Title" fontWeight="regular" color="white">
          {expireDate}
        </Text>
      </div>
    </StyledCardContainer>
  );
};
