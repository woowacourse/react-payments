import { css } from '@emotion/react';

import { CardBrandsType } from './cardBrand.types';
import {
  StyledCardContainer,
  StyledCardTypeIcon,
  StyledICCheapContainer,
} from './CardPreview.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';
import { ExpireDateInputType } from '@/hooks/useExpireDateInput';
type Props = {
  /**
   * 카드 번호를 입력받는 배열입니다.
   */
  cardNumbers: CardInputType[];
  /**
   * 카드 유효기간을 입력받는 배열입니다.
   */
  expireDate: ExpireDateInputType;
  /**
   * 카드 브랜드를 입력받는 배열입니다.
   */
  cardBrand: CardBrandsType;
};

export const CardPreview = ({ cardNumbers, expireDate, cardBrand }: Props) => {
  const cardTypeCheck = () => {
    if (cardNumbers[0].value.startsWith('4')) {
      return './images/Visa.png';
    }

    if (
      Number(cardNumbers[0].value.slice(0, 2)) >= 51 &&
      Number(cardNumbers[0].value.slice(0, 2)) <= 55
    ) {
      return './images/Master.png';
    }
  };

  const getDisplayCardNumber = (cardNumber: number, index: number): string => {
    if (!cardNumber) return '';

    return index < 2 ? cardNumber.toString() : '****';
  };

  return (
    <StyledCardContainer cardBrand={cardBrand}>
      <StyledICCheapContainer />
      {cardTypeCheck() && <StyledCardTypeIcon src={cardTypeCheck()} alt="cardType" />}
      <Flex direction="column" alignItems="flex-start" padding="70px 25px 0px 25px" gap="10px">
        <Flex gap="20px">
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
          {expireDate.month.value ? `${expireDate.month.value} / ${expireDate.year.value}` : ''}
        </Text>
      </Flex>
    </StyledCardContainer>
  );
};
