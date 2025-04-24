import Preview from '../../widgets/preview/ui/Preview';
import { CardInfoContainer } from '../../features/cardInfo/ui';
import * as S from './CardPage.styles';
import { confirmButtonValidator } from '../../features/cardInfo/validation/cardInfoValidator';
import LinkButton from '../../shared/ui/BottomLinkButton';

interface CardPageProps {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
  cardIssuer: string;
  cardPassword: string;
  handleCardInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: {
    cardNumberError: { errorIndex: number; errorMessage: string };
    cardExpirationDateError: { errorIndex: number; errorMessage: string };
    cardCVCError: { errorIndex: number; errorMessage: string };
    cardIssuerError: { errorIndex: number; errorMessage: string };
    cardPasswordError: { errorIndex: number; errorMessage: string };
  };
}

function CardPage({
  cardNumber,
  cardExpirationDate,
  cardCVC,
  cardIssuer,
  cardPassword,
  handleCardInfoChange,
  error,
}: CardPageProps) {
  return (
    <S.AppContainer>
      <S.CardContainer>
        <Preview cardIssuer={cardIssuer} cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
        <CardInfoContainer
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          cardCVC={cardCVC}
          cardIssuer={cardIssuer}
          cardPassword={cardPassword}
          onChange={handleCardInfoChange}
          error={error}
        />
        {confirmButtonValidator({ cardNumber, cardExpirationDate, cardCVC, cardIssuer, cardPassword }) && (
          <LinkButton path='complete' />
        )}
      </S.CardContainer>
    </S.AppContainer>
  );
}

export default CardPage;
