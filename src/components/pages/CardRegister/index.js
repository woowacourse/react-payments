import React, { useEffect, useState } from 'react';
import Card from '../../shared/Card';
import CardRegisterForm from '../../units/CardRegisterForm';
import CardSelector from '../../units/CardSelector';
import Button from '../../shared/Button';
import PALETTE from '../../../styles/palette';
import { dummyBanks } from '../../../mockData';
import * as Style from './style';

const CardRegister = (props) => {
  const [isSelectorOpened, setSelectorOpened] = useState(false);
  const [cardColor, setCardColor] = useState(PALETTE.EMPTY_CARD_GRAY);
  const [cardNumbers, setCardNumbers] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const [bankId, setBankId] = useState('');
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [cardPassword, setCardPassword] = useState({ 1: '', 2: '' });

  const isCardNumbersFilled = (numbers) => Object.values(numbers).every((fragment) => fragment.length === 4);

  const handleClickNextPage = () => {};

  useEffect(() => {
    if (isCardNumbersFilled(cardNumbers)) {
      setSelectorOpened(true);
    }
  }, [cardNumbers]);

  useEffect(() => {
    setCardColor(dummyBanks.find(({ id }) => id === bankId)?.color || PALETTE.EMPTY_CARD_GRAY);
  }, [bankId]);

  const bankName = dummyBanks.find(({ id }) => id === bankId)?.name;

  return (
    <>
      <Style.Root>
        <Style.CardWrapper>
          <Card
            width="213px"
            height="133px"
            backgroundColor={cardColor}
            ownerName={ownerName}
            bankName={bankName}
            cardNumbers={cardNumbers}
            expirationDate={expirationDate}
          />
        </Style.CardWrapper>
        <CardRegisterForm
          expirationDate={expirationDate}
          ownerName={ownerName}
          setCardNumbers={setCardNumbers}
          setExpirationDate={setExpirationDate}
          setOwnerName={setOwnerName}
          secureCode={secureCode}
          setSecureCode={setSecureCode}
          setCardPassword={setCardPassword}
        />
        <Button text={'다음'} onClick={handleClickNextPage} />
      </Style.Root>
      {isSelectorOpened && <CardSelector setBankId={setBankId} setSelectorOpened={setSelectorOpened} />}
    </>
  );
};

export default CardRegister;
