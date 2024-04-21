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
  const isMonthYearAllVisible = monthState.month && yearState.year;
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
            {firstState.first}
          </Styled.UserInfomation>
          <Styled.UserInfomation $typo={theme.typography.cardNumber}>
            {secondState.second}
          </Styled.UserInfomation>
          <Styled.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(thirdState.third ?? '').length)}
          </Styled.UserInfomation>
          <Styled.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(fourthState.fourth ?? '').length)}
          </Styled.UserInfomation>
        </Styled.CardNumberContainer>
        <Styled.UserInfomation $typo={theme.typography.cardExpirationDate}>
          {`${monthState.month ?? ''}${isMonthYearAllVisible ? CONDITION.splitSlash : ''}${yearState.year ?? ''}`}
        </Styled.UserInfomation>
        <Styled.UserInfomation $typo={theme.typography.cardUserName}>
          {userNameState.userName ?? ''}
        </Styled.UserInfomation>
      </Styled.UserInformationContainer>
    </Styled.CardInformationPreview>
  );
};

export default CardInformationPreview;
