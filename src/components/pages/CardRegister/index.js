import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import CardRegisterForm from '../../units/CardRegisterForm';
import CardSelector from '../../units/CardSelector';
import PALETTE from '../../../styles/palette';
import { dummyBanks } from '../../../mockData';
import * as Style from './style';

const CardRegister = (props) => {
  const { setCardData, handleGoNext } = props;

  const [isSelectorOpened, setSelectorOpened] = useState(false);
  const [cardColor, setCardColor] = useState(PALETTE.EMPTY_CARD_GRAY);
  const [cardNumbers, setCardNumbers] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const [bankId, setBankId] = useState('');
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [cardPassword, setCardPassword] = useState({ 1: '', 2: '' });

  const handleCompleteRegister = (event) => {
    event.preventDefault();

    setCardData({ bankId, cardNumbers, expirationDate, ownerName, secureCode, cardPassword });
    handleGoNext();
  };

  const isCardIdentified =
    Object.values(cardNumbers)
      .slice(0, 2)
      .every((fragment) => fragment.length === 4) && !bankId;

  useEffect(() => {
    if (isCardIdentified) {
      setSelectorOpened(true);
    }
  }, [isCardIdentified]);

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
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          ownerName={ownerName}
          secureCode={secureCode}
          cardPassword={cardPassword}
          setCardNumbers={setCardNumbers}
          setExpirationDate={setExpirationDate}
          setOwnerName={setOwnerName}
          setSecureCode={setSecureCode}
          setCardPassword={setCardPassword}
          onSubmitForm={handleCompleteRegister}
        />
        <Button text={'다음'} formId="register-form" />
      </Style.Root>
      {isSelectorOpened && <CardSelector setBankId={setBankId} setSelectorOpened={setSelectorOpened} />}
    </>
  );
};

CardRegister.propTypes = {
  setCardData: PropTypes.func.isRequired,
  handleGoNext: PropTypes.func.isRequired,
};

export default CardRegister;
