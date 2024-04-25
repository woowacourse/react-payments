import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import CONDITION from '../../constants/Condition';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';
import MESSAGE from '../../constants/Message';
import {
  StyledCVC,
  StyledCVCContainer,
  StyledCardImg,
  StyledCardInformationPreview,
  StyledCardNumberContainer,
  StyledImgContainer,
  StyledUserInfomation,
  StyledUserInformationContainer,
} from './style';
import { CVCStateType } from '../../hooks/useCVC';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
  selectedCardState: SelectedCardStateType;
  cvcState: CVCStateType;
}

const { OPTION } = MESSAGE;

const selectedCardColor = (selectedCard: string) => {
  return (
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.bc] && theme.color.magenta) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.sinhan] && theme.color.blue) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.kakaobank] && theme.color.yellow) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.hyndai] && theme.color.black) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.woori] && theme.color.brightBlue) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.lotte] && theme.color.orange) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.hana] && theme.color.teal) ||
    (selectedCard === OPTION.cardSelect[CONDITION.CARD.kb] && theme.color.brownishGray) ||
    theme.color.darkGray
  );
};

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
        <StyledCardInformationPreview
          $isBackOfCard={cvcState.isFocus}
          $selectedCardColor={theme.color.brightGray}
          onClick={() => cvcState.setIsFocus((prev) => !prev)}
        >
          <StyledCVCContainer>
            <StyledCVC>{cvcState.value}</StyledCVC>
          </StyledCVCContainer>
        </StyledCardInformationPreview>
      )}
      {!isBackOfCardAppearedCondition && (
        <StyledCardInformationPreview
          $isBackOfCard={cvcState.isFocus}
          $selectedCardColor={selectedCardColor(selectedCardState.value)}
          onClick={() => cvcState.setIsFocus((prev) => !prev)}
        >
          <StyledImgContainer>
            <StyledCardImg src={magnetic} alt="magnetic" />
            {isVisa && <StyledCardImg src={visa} alt="visa" />}
            {isMasterCard && <StyledCardImg src={masterCard} alt="masterCard" />}
          </StyledImgContainer>
          <StyledUserInformationContainer>
            <StyledCardNumberContainer>
              <StyledUserInfomation $typo={theme.typography.cardNumber}>
                {firstState.value}
              </StyledUserInfomation>
              <StyledUserInfomation $typo={theme.typography.cardNumber}>
                {secondState.value}
              </StyledUserInfomation>
              <StyledUserInfomation $typo={theme.typography.cardNumber}>
                {CONDITION.hiddenCardNumber.repeat(String(thirdState.value ?? '').length)}
              </StyledUserInfomation>
              <StyledUserInfomation $typo={theme.typography.cardNumber}>
                {CONDITION.hiddenCardNumber.repeat(String(fourthState.value ?? '').length)}
              </StyledUserInfomation>
            </StyledCardNumberContainer>
            <StyledUserInfomation $typo={theme.typography.cardExpirationDate}>
              {`${monthState.value ?? ''}${isMonthYearAllVisible ? CONDITION.splitSlash : ''}${yearState.value ?? ''}`}
            </StyledUserInfomation>
            <StyledUserInfomation $typo={theme.typography.cardUserName}>
              {userNameState.value ?? ''}
            </StyledUserInfomation>
          </StyledUserInformationContainer>
        </StyledCardInformationPreview>
      )}
    </>
  );
};

export default CardInformationPreview;
