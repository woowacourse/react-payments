import { FormEvent, useState } from 'react';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../../../utils/localStorage';
import { CardRegisterInfo } from '../../../types/card.type';
import { useCardRegisterContext } from '../../../context/CardRegisterContext';
import { useNavigate } from 'react-router-dom';
import * as Styled from './CardAlias.styles';
import Card from '../../../components/pages/CardList/CardContent/CardContent';
import CardAliasInput from '../../../components/pages/CardRegister/CardAliasInput/CardAliasInput';

const CardAlias = () => {
  const navigate = useNavigate();
  const { cardRegisterInfo, initCardRegisterInfo } = useCardRegisterContext();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const input = form.elements.namedItem('cardAlias') as HTMLInputElement;

    const hasValidInput = input.validity.valid;
    setIsValid(hasValidInput);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardRegisterInfo !== null) {
      const cardList = getItemFromLocalStorage<CardRegisterInfo[]>('CardList');
      const newCardList = cardList !== null ? [cardRegisterInfo, ...cardList] : [cardRegisterInfo];
      setItemInLocalStorage('CardList', newCardList);
      initCardRegisterInfo();
    }

    navigate('/');
  };

  return (
    <Styled.Root>
      <h2>
        카드등록이 완료되었습니다.
        <br />
        별칭을 설정해주세요.
      </h2>
      {cardRegisterInfo && (
        <Card
          cardNumber={cardRegisterInfo.cardNumber}
          expirationDate={cardRegisterInfo.expirationDate}
          holderName={cardRegisterInfo.holderName}
          cvc={cardRegisterInfo.cvc}
          password={cardRegisterInfo.password}
          bankName={cardRegisterInfo.bankName}
        />
      )}
      <Styled.Form onSubmit={handleSubmit} onChange={handleChange}>
        <CardAliasInput />
        {isValid && <Styled.SubmitButton>확인</Styled.SubmitButton>}
      </Styled.Form>
    </Styled.Root>
  );
};

export default CardAlias;
