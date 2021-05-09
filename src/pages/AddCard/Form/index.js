import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { TextButton } from '../../../components';
import { CARD } from '../../../constants';
import { isValidDateFormat, isValidSerialNumber } from '../../../utils/validator';
import Preview from './Preview';
import SerialNumber from './SerialNumber';
import ExpirationDate from './ExpirationDate';
import UserName from './UserName';
import SecurityCode from './SecurityCode';
import FormModal from './Modal';
import Password from './Password';

export default function Form() {
  const [serialNumber, setSerialNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [userName, setUserName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({ first: '', second: '' });
  const [cardCompany, setCardCompany] = useState('');

  const [modalContents, setModalContents] = useState(null);

  const history = useHistory();

  const isFormCompleted = useMemo(() => {
    return (
      isValidSerialNumber(serialNumber) &&
      cardCompany &&
      isValidDateFormat(expirationDate) &&
      securityCode.length === CARD.SECURITY_CODE_LENGTH &&
      password.first &&
      password.second
    );
  }, [serialNumber, cardCompany, expirationDate, securityCode, password]);

  const onSetPassword = (key, value) => {
    if (isNaN(value)) return;

    setPassword({ ...password, [key]: value });
  };

  const onCardFormSubmit = (event) => {
    event.preventDefault();

    if (!isFormCompleted) return;

    history.push('/addCardComplete', {
      card: { serialNumber, expirationDate, userName, securityCode, password, cardCompany },
    });
  };

  return (
    <>
      <form className="add-card-form" onSubmit={onCardFormSubmit}>
        <Preview
          userName={userName}
          cardCompany={cardCompany}
          serialNumber={serialNumber}
          expirationDate={expirationDate}
        />
        <SerialNumber
          cardCompany={cardCompany}
          setCardCompany={setCardCompany}
          serialNumber={serialNumber}
          setSerialNumber={setSerialNumber}
          setModalContents={setModalContents}
        />
        <ExpirationDate expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
        <UserName userName={userName} setUserName={setUserName} />
        <SecurityCode
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          setModalContents={setModalContents}
        />
        <Password password={password} onSetPassword={onSetPassword}></Password>
        {isFormCompleted && (
          <div className="bottom-right-button">
            <TextButton>다음</TextButton>
          </div>
        )}
      </form>
      {modalContents && (
        <FormModal
          onCloseModal={() => {
            setModalContents(null);
          }}
          modalContents={modalContents}
          setCardCompany={setCardCompany}
        />
      )}
    </>
  );
}
