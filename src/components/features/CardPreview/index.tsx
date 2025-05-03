import { css } from '@emotion/react';

import {
  StyledCardContainer,
  StyledCardTypeIcon,
  StyledICCheapContainer,
} from './CardPreview.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { useCardForm } from '@/hooks/useCardForm';

export const CardPreview = () => {
  const { formData } = useCardForm();

  const cardTypeCheck = (() => {
    if (formData.cardNumber[0].value.startsWith('4')) {
      return './images/Visa.png';
    }

    if (
      Number(formData.cardNumber[0].value.slice(0, 2)) >= 51 &&
      Number(formData.cardNumber[0].value.slice(0, 2)) <= 55
    ) {
      return './images/Master.png';
    }
  })();

  const getDisplayCardNumber = (cardNumber: number, index: number): string => {
    if (!cardNumber) return '';

    return index < 2 ? cardNumber.toString() : '*'.repeat(cardNumber.toString().length);
  };

  return (
    <StyledCardContainer cardBrand={formData.brand}>
      <StyledICCheapContainer />
      {cardTypeCheck && <StyledCardTypeIcon src={cardTypeCheck} alt="cardType" />}
      <Flex direction="column" alignItems="flex-start" padding="70px 25px 0px 25px" gap="10px">
        <Flex gap="20px">
          {formData.cardNumber.map((str, index) => (
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
          {formData.expireDate[0]?.value
            ? formData.expireDate?.map((date) => date.value).join(' / ')
            : ''}
        </Text>
      </Flex>
    </StyledCardContainer>
  );
};
