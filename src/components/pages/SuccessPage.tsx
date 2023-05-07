import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useCardList from '../../hooks/useCardList';
import Card from '../@common/card/Card';

import { CreditCardContext } from '../../contexts/CreditCardContext';
import Input from '../@common/input/Input';
import CreditCardContextType from '../../@types/creditCardContextType';
import { KOR_NAME_BY_CARD_COMPANY } from '../../@types/cardCompany';
import Loading from '../loading/Loading';
import {
  CardInputContainer,
  CardListSection,
  StyleButton,
  StyleErrorMessage,
  StyledMessage,
} from './SuccessPage.style';

function SuccessPage() {
  const navigation = useNavigate();
  const { saveCard } = useCardList();
  const { creditCard, setCreditCard, initCreditCard } = useContext(
    CreditCardContext
  ) as CreditCardContextType;

  const { cardNumber, cardCompany, ownerName, expirationDate } = creditCard;

  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (creditCard.cardAlias.length < 1 || creditCard.cardAlias.length > 10) {
      setIsValid(false);
      return;
    }

    setIsLoading(true);

    await saveCard({ ...creditCard });

    setIsLoading(false);
    initCreditCard();
    navigation('/', { replace: true });
  };

  return (
    <>
      {!isLoading ? (
        <CardListSection>
          <CardInputContainer>
            <StyledMessage>카드 별칭을 정해주세요</StyledMessage>
            <Card
              ownerName={ownerName}
              cardCompany={cardCompany}
              expirationDate={expirationDate}
              cardNumber={cardNumber}
            ></Card>
            <div>
              <Input
                onChange={(event) => {
                  const alias = event.currentTarget.value;

                  if (!setCreditCard) return;
                  setCreditCard('cardAlias', alias);
                }}
                placeholder={KOR_NAME_BY_CARD_COMPANY[cardCompany]}
              ></Input>
              {!isValid && (
                <StyleErrorMessage>{'1글자 이상 10글자 이하로 입력해주세요.'}</StyleErrorMessage>
              )}
            </div>
          </CardInputContainer>

          <StyleButton onClick={handleSubmit}>확인</StyleButton>
        </CardListSection>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SuccessPage;
