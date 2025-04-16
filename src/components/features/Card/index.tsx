import { css } from '@emotion/react';

import { StyledCardContainer, StyledCardTypeIcon, StyledICCheapContainer } from './Card.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  cardNumbers: CardInputType[];
  expireDate: CardInputType[];
};

export const Card = ({ cardNumbers, expireDate }: Props) => {
  const cardTypeCheck = () => {
    if (cardNumbers[0].value.startsWith('4')) {
      return '/images/Visa.png';
    }

    if (
      Number(cardNumbers[0].value.slice(0, 2)) >= 51 &&
      Number(cardNumbers[0].value.slice(0, 2)) <= 55
    ) {
      return '/images/Master.png';
    }
  };

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
      {cardTypeCheck() && <StyledCardTypeIcon src={cardTypeCheck()} alt="cardType" />}

      <Flex direction="column" alignItems="flex-start" width="300px" height="200px" margin="0 auto">
        <Flex gap="20px" height="36px" margin="10px 0 0 0">
          {cardNumbers.map((str, index) => (
            <div
              key={`card-number-${index}`}
              css={css`
                width: 60px;
                height: 36px;
                text-align: left;
              `}
            >
              <Text variant="Title" fontWeight="regular" color="white" key={`${str}-${index}`}>
                {getDisplayCardNumber(Number(str.value), index)}
              </Text>
            </div>
          ))}
        </Flex>
        {expireDate[0].value && (
          <Text
            variant="Title"
            fontWeight="regular"
            color="white"
            css={css`
              width: 60px;
              height: 36px;
              text-align: left;
            `}
          >
            {expireDate.map((date) => date.value).join(' / ')}
          </Text>
        )}
      </Flex>
    </StyledCardContainer>
  );
};
