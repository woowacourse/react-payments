import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import CardRegisterForm from '../../units/CardRegisterForm';
import CardSelector from '../../units/CardSelector';
import { FRAGMENT_INDEX, DATE_TYPE } from '../../../constants/constants';
import PAGES from '../../../constants/pages';
import * as Style from './style';

const CardRegister = (props) => {
  const { setCardData, handleMovePage } = props;

  const { FIRST, SECOND, THIRD, FOURTH } = FRAGMENT_INDEX;
  const { MONTH, YEAR } = DATE_TYPE;

  const [isSelectorOpened, setSelectorOpened] = useState(false);
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

  const handleCompleteRegister = (event) => {
    event.preventDefault();

    setCardData({ bankId, cardNumbers, expirationDate, ownerName, secureCode, cardPassword });
    handleMovePage(PAGES.COMPLETION);
  };

  return (
    <>
      <Style.Root>
        <Style.CardWrapper>
          <Card
            width="213px"
            height="133px"
            bankId={bankId}
            cardNumbers={cardNumbers}
            ownerName={ownerName}
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
        <Button type="submit" text="다음" formId="register-form" />
      </Style.Root>
      {isSelectorOpened && <CardSelector setBankId={setBankId} setSelectorOpened={setSelectorOpened} />}
    </>
  );
};

CardRegister.propTypes = {
  setCardData: PropTypes.func.isRequired,
  handleMovePage: PropTypes.func.isRequired,
};

export default CardRegister;
