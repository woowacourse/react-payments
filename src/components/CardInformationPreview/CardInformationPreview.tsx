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

  const isBackOfCardAppearedCondition = cvcState.isFocus;

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
          $selectedCardColor={selectedCardState.cardColor}
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
