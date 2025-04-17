import { css } from '@emotion/react';

import {
  StyledCardContainer,
  StyledCardTypeIcon,
  StyledICCheapContainer,
} from './CardPreview.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  /**
   * 카드 번호를 입력받는 배열입니다.
   */
  cardNumbers: CardInputType[];
  /**
   * 카드 유효기간을 입력받는 배열입니다.
   */
  expireDate: CardInputType[];
};

export const CardPreview = ({ cardNumbers, expireDate }: Props) => {
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

  const getDisplayCardNumber = (cardNumber: number, index: number): string => {
    if (!cardNumber) return '';

    return index < 2 ? cardNumber.toString() : '****';
  };

  return (
    <StyledCardContainer>
      <StyledICCheapContainer />
      {cardTypeCheck() && <StyledCardTypeIcon src={cardTypeCheck()} alt="cardType" />}
      <Flex
        direction="column"
        alignItems="flex-start"
        width="300px"
        height="200px"
        margin="0 auto"
        padding="20px 0 0 0"
        gap="10px"
      >
        <Flex gap="20px" height="36px">
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
        <Flex gap="20px" height="36px">
          <Text
            variant="Title"
            fontWeight="regular"
            color="white"
            css={css`
              width: 100px;
              height: 36px;
              text-align: left;
            `}
          >
            {expireDate[0].value ? expireDate.map((date) => date.value).join(' / ') : ''}
          </Text>
        </Flex>
      </Flex>
    </StyledCardContainer>
  );
};
