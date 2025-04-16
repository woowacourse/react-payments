import { css } from '@emotion/css';

import { StyledCardContainer, StyledCardTypeIcon, StyledICCheapContainer } from './Card.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  type: 'VISA' | 'MASTER';
  cardNumbers: CardInputType[];
  expireDate: string;
};

export const Card = ({ type, cardNumbers, expireDate }: Props) => {
  const cardTypeSrc = type === 'VISA' ? '/images/Visa.png' : '/images/Master.png';

  const getDisplayCardNumber = (number: number, index: number): string => {
    if (!number) {
      return '';
    }

    if (index < 2) {
      return number.toString();
    }

    return '****';
  };

  return (
    <StyledCardContainer>
      <StyledICCheapContainer />
      <StyledCardTypeIcon src={cardTypeSrc} alt="cardType" />

      <Flex direction="column" alignItems="flex-start" width="300px" height="100%" margin="0 auto">
        <Flex gap="20px" height="36px" margin="10px 0 0 0">
          {cardNumbers.map((str, index) => (
            <div
              key={`card-number-${index}`}
              className={css`
                width: 60px;
                text-align: left;
              `}
            >
              <Text variant="Title" fontWeight="regular" color="white" key={`${str}-${index}`}>
                {getDisplayCardNumber(Number(str.value), index)}
              </Text>
            </div>
          ))}
        </Flex>
        <Text variant="Title" fontWeight="regular" color="white">
          {expireDate}
        </Text>
      </Flex>
    </StyledCardContainer>
  );
};
