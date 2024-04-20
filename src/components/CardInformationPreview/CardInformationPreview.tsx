import * as Preview from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import CONDITION from '../../constants/Condition';
import { CardNumberState } from '../../hooks/useCardNumber';
import { ExpirationDateState } from '../../hooks/useExpirationDate';
import { UserNameState } from '../../hooks/useUserName';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberState;
  expirationDateState: ExpirationDateState;
  userNameState: UserNameState;
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
    <Preview.Container>
      <Preview.ImgContainer>
        <Preview.CardImg src={magnetic} alt="magnetic" />
        {isVisa && <Preview.CardImg src={visa} alt="visa" />}
        {isMasterCard && <Preview.CardImg src={masterCard} alt="masterCard" />}
      </Preview.ImgContainer>
      <Preview.UserInformationContainer>
        <Preview.CardNumberContainer>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {firstState.first}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {secondState.second}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(thirdState.third ?? '').length)}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(fourthState.fourth ?? '').length)}
          </Preview.UserInfomation>
        </Preview.CardNumberContainer>
        <Preview.UserInfomation $typo={theme.typography.cardExpirationDate}>
          {`${monthState.month ?? ''}${isMonthYearAllVisible ? CONDITION.splitSlash : ''}${yearState.year ?? ''}`}
        </Preview.UserInfomation>
        <Preview.UserInfomation $typo={theme.typography.cardUserName}>
          {userNameState.userName ?? ''}
        </Preview.UserInfomation>
      </Preview.UserInformationContainer>
    </Preview.Container>
  );
};

export default CardInformationPreview;
