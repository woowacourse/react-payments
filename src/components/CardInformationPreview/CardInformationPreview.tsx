import * as Preview from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import { CardNumberState, ExpirationDateState, ShowImageCondition } from '../../types/Types';
import CONDITION from '../../constants/Condition';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberState;
  expirationDateState: ExpirationDateState;
  userNameState: string;
  showImageCondition: ShowImageCondition;
  cardBrandState: string;
  cvcNumberState: string;
  isFocusCVCPreview: boolean;
  setIsFocusCVCPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const CARD_BRAND_BACKGROUND: Record<string, string> = {
  default: theme.color.darkGray,
  BC카드: theme.color.brand.bc,
  신한카드: theme.color.brand.shinhan,
  카카오뱅크: theme.color.brand.kakao,
  현대카드: theme.color.brand.hyundai,
  우리카드: theme.color.brand.woori,
  롯데카드: theme.color.brand.lotte,
  하나카드: theme.color.brand.hana,
  국민카드: theme.color.brand.kookmin,
};

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  showImageCondition,
  cardBrandState,
  cvcNumberState,
  isFocusCVCPreview,
  setIsFocusCVCPreview,
}: CardInformationPreviewProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { month, year } = expirationDateState;
  const slashViewCondition = month && year;
  const { visaShowCondition, masterCardShowCondition } = showImageCondition;

  const toggleIsFocusCVCPreview = () => {
    setIsFocusCVCPreview((prev) => !prev);
  };

  return (
    <Preview.Container>
      <Preview.Inner onClick={toggleIsFocusCVCPreview} $isFocusCVCPreview={isFocusCVCPreview}>
        <Preview.CardFront
          $brandColor={
            cardBrandState !== ''
              ? CARD_BRAND_BACKGROUND[cardBrandState]
              : CARD_BRAND_BACKGROUND.default
          }
          $isFocusCVCPreview={isFocusCVCPreview}
        >
          <Preview.ImgContainer>
            <Preview.CardImg src={magnetic} alt="" />
            {masterCardShowCondition && <Preview.CardImg src={masterCard} alt="masterCard" />}
            {visaShowCondition && <Preview.CardImg src={visa} alt="visa" />}
          </Preview.ImgContainer>
          <Preview.UserInformationContainer>
            <Preview.CardNumberContainer>
              <Preview.UserInformation $typo={theme.typography.paragraph1}>
                {first}
              </Preview.UserInformation>
              <Preview.UserInformation $typo={theme.typography.paragraph1}>
                {second}
              </Preview.UserInformation>
              <Preview.UserInformation $typo={theme.typography.paragraph1}>
                {CONDITION.hiddenCardNumber.repeat(String(third ?? '').length)}
              </Preview.UserInformation>
              <Preview.UserInformation $typo={theme.typography.paragraph1}>
                {CONDITION.hiddenCardNumber.repeat(String(fourth ?? '').length)}
              </Preview.UserInformation>
            </Preview.CardNumberContainer>
            <Preview.UserInformation $typo={theme.typography.paragraph2}>
              {`${month ?? ''}${slashViewCondition ? CONDITION.splitSlash : ''}${year ?? ''}`}
            </Preview.UserInformation>
            <Preview.UserInformation $typo={theme.typography.paragraph2}>
              {userNameState ?? ''}
            </Preview.UserInformation>
          </Preview.UserInformationContainer>
        </Preview.CardFront>
        <Preview.CardBack $isFocusCVCPreview={isFocusCVCPreview}>
          <Preview.CVCNumber $brandColor={CARD_BRAND_BACKGROUND[cardBrandState ?? 'default']}>
            {cvcNumberState}
          </Preview.CVCNumber>
        </Preview.CardBack>
      </Preview.Inner>
    </Preview.Container>
  );
};

export default CardInformationPreview;
