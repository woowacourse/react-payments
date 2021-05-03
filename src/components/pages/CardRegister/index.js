import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import CardRegisterForm from '../../units/CardRegisterForm';
import CardSelector from '../../units/CardSelector';
import PALETTE from '../../../styles/palette';
import { dummyBanks } from '../../../mockData';
import { FRAGMENT_INDEX, DATE_TYPE } from '../../../constants/constants';
import * as Style from './style';

const CardRegister = (props) => {
  const { setCardData, handleGoNext } = props;
  const { FIRST, SECOND, THIRD, FOURTH } = FRAGMENT_INDEX;
  const { MONTH, YEAR } = DATE_TYPE;

  const [isSelectorOpened, setSelectorOpened] = useState(false);
  const [cardColor, setCardColor] = useState(PALETTE.EMPTY_CARD_GRAY);
  const [cardNumbers, setCardNumbers] = useState({ [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' });
  const [bankId, setBankId] = useState('');
  const [expirationDate, setExpirationDate] = useState({ [MONTH]: '', [YEAR]: '' });
  const [ownerName, setOwnerName] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [cardPassword, setCardPassword] = useState('');

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
    const bank = dummyBanks.find(({ id }) => id === bankId);
    const color = bank?.color || PALETTE.EMPTY_CARD_GRAY;
    setCardColor(color);
  }, [bankId]);

  const bankName = dummyBanks.find(({ id }) => id === bankId)?.name || '';

  const handleCompleteRegister = (event) => {
    event.preventDefault();
    event.reportValidity();

    setCardData({ bankId, cardNumbers, expirationDate, ownerName, secureCode, cardPassword });
    handleGoNext();
  };

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
