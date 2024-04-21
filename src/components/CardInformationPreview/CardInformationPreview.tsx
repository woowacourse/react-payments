import * as Styled from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import CONDITION from '../../constants/Condition';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
}

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
}: CardInformationPreviewProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;
  const isMonthYearAllVisible = monthState.value && yearState.value;
  const { isVisa, isMasterCard } = cardNumberState.showImageCondition;

  return (
    <Styled.CardInformationPreview>
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
  );
};

export default CardInformationPreview;
