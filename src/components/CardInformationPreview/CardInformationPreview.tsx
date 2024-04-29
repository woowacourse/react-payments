import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import CONDITION from '../../constants/Condition';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';
import * as Styled from './style';
import { CVCStateType } from '../../hooks/useCVC';
import { useEffect, useState } from 'react';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
  selectedCardState: SelectedCardStateType;
  cvcState: CVCStateType;
}

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  selectedCardState,
  cvcState,
}: CardInformationPreviewProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;
  const isMonthYearAllVisible = monthState.value && yearState.value;
  const { isVisa, isMasterCard } = cardNumberState.showImageCondition;
  const [cardColor, setCardColor] = useState<string>(theme.color.darkGray);

  const isBackOfCardAppearedCondition = cvcState.isFocus;

  useEffect(() => {
    switch (selectedCardState.value) {
      case 'BC카드':
        setCardColor(theme.color.magenta);
        break;
      case '신한카드':
        setCardColor(theme.color.blue);
        break;
      case '카카오뱅크':
        setCardColor(theme.color.yellow);
        break;
      case '현대카드':
        setCardColor(theme.color.black);
        break;
      case '우리카드':
        setCardColor(theme.color.brightBlue);
        break;
      case '롯데카드':
        setCardColor(theme.color.orange);
        break;
      case '하나카드':
        setCardColor(theme.color.teal);
        break;
      case '국민카드':
        setCardColor(theme.color.brownishGray);
        break;
      default:
        setCardColor(theme.color.darkGray);
    }
  }, [selectedCardState.value]);

  return (
    <>
      {isBackOfCardAppearedCondition && (
        <Styled.CardInformationPreview
          $isBackOfCard={cvcState.isFocus}
          $selectedCardColor={theme.color.brightGray}
          onClick={() => cvcState.setIsFocus((prev) => !prev)}
        >
          <Styled.CVCContainer>
            <Styled.CVC>{cvcState.value}</Styled.CVC>
          </Styled.CVCContainer>
        </Styled.CardInformationPreview>
      )}
      {!isBackOfCardAppearedCondition && (
        <Styled.CardInformationPreview
          $isBackOfCard={cvcState.isFocus}
          $selectedCardColor={cardColor}
          onClick={() => cvcState.setIsFocus((prev) => !prev)}
        >
          <Styled.ImgContainer>
            <Styled.CardImg src={magnetic} alt="magnetic" />
            {isVisa && <Styled.CardImg src={visa} alt="visa" />}
            {isMasterCard && <Styled.CardImg src={masterCard} alt="masterCard" />}
          </Styled.ImgContainer>
          <Styled.UserInformationContainer>
            <Styled.CardNumberContainer>
              <Styled.UserInfomation $typo={theme.typography.cardNumber}>
                {firstState.value}
              </Styled.UserInfomation>
              <Styled.UserInfomation $typo={theme.typography.cardNumber}>
                {secondState.value}
              </Styled.UserInfomation>
              <Styled.UserInfomation $typo={theme.typography.cardNumber}>
                {CONDITION.hiddenCardNumber.repeat(String(thirdState.value ?? '').length)}
              </Styled.UserInfomation>
              <Styled.UserInfomation $typo={theme.typography.cardNumber}>
                {CONDITION.hiddenCardNumber.repeat(String(fourthState.value ?? '').length)}
              </Styled.UserInfomation>
            </Styled.CardNumberContainer>
            <Styled.UserInfomation $typo={theme.typography.cardExpirationDate}>
              {`${monthState.value ?? ''}${isMonthYearAllVisible ? CONDITION.splitSlash : ''}${yearState.value ?? ''}`}
            </Styled.UserInfomation>
            <Styled.UserInfomation $typo={theme.typography.cardUserName}>
              {userNameState.value ?? ''}
            </Styled.UserInfomation>
          </Styled.UserInformationContainer>
        </Styled.CardInformationPreview>
      )}
    </>
  );
};

export default CardInformationPreview;
