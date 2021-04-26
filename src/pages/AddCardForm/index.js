import React, { useState, useRef, useMemo, useEffect } from 'react';
import { CARD_COMPANY, ERROR_MESSAGE } from '../../constants';
import { Icon, Card, Input, Header, TextButton, PasswordInput } from '../../stories/components';
import { cardSerialNumberFormatter, MMYYDateFormatter } from '../../utils/formatter';
import { isValidSerialNumber, isValidDateFormat, isValidUserName } from './validator';
import './style.css';

export default function AddCardForm({
  serialNumber,
  setSerialNumber,
  cardCompany,
  setCardCompany,
  expirationDate,
  setExpirationDate,
  userName,
  setUserName,
  securityCode,
  setSecurityCode,
  password,
  setPassword,
  onSetModalContents,
  setPage,
}) {
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] = useState('');
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');

  const serialNumberInputElement = useRef(null);

  const isFormCompleted = useMemo(() => {
    return (
      isValidSerialNumber(serialNumber) &&
      cardCompany &&
      isValidDateFormat(expirationDate) &&
      securityCode.length === 3 &&
      password.first &&
      password.second
    );
  }, [serialNumber, cardCompany, expirationDate, securityCode, password]);

  useEffect(() => {
    serialNumberInputElement.current.focus();
  }, [cardCompany]);

  const onSetPassword = (key, value) => {
    if (isNaN(value)) return;

    setPassword({ ...password, [key]: value });
  };

  const offsetByInputType = {
    deleteContentBackward: -1,
    insertText: 1,
  };

  const getOffset = (inputType, selectionStart) => {
    if (inputType === 'insertText') {
      return selectionStart !== 0 && selectionStart % 5 === 0 ? offsetByInputType[inputType] : 0;
    }

    if (inputType === 'deleteContentBackward') {
      return selectionStart !== 0 && (selectionStart + 1) % 5 === 0
        ? offsetByInputType[inputType]
        : 0;
    }

    return 0;
  };

  const getCurrentSerialNumber = {
    deleteContentBackward: (serialIndex) => {
      return serialNumber.slice(0, serialIndex - 1) + serialNumber.slice(serialIndex);
    },
    insertText: (serialIndex, insertKey) => {
      return serialNumber.slice(0, serialIndex) + insertKey + serialNumber.slice(serialIndex);
    },
  };

  const onSerialNumberInputChange = (event) => {
    const inputKey = event.nativeEvent.data;
    const inputValue = event.target.value.replaceAll('-', '');

    if (isNaN(inputKey)) {
      event.target.value = cardSerialNumberFormatter(serialNumber);
      return;
    }

    const inputType = event.nativeEvent.inputType;
    const selectionStart = event.target.selectionStart;
    const offset = getOffset(inputType, selectionStart);
    const currentLocation = selectionStart + offset;

    const serialIndex =
      currentLocation - Math.floor(currentLocation / 5) - offsetByInputType[inputType];
    const currentSerialNumber = getCurrentSerialNumber[inputType](serialIndex, inputKey);

    setSerialNumber(currentSerialNumber);
    event.target.value = cardSerialNumberFormatter(currentSerialNumber);
    event.target.setSelectionRange(currentLocation, currentLocation);

    if (inputValue.length === 8) {
      serialNumberInputElement.current.blur();
      onSetModalContents('cardSelection');
    }

    if (cardCompany && inputValue.length < 8) {
      setCardCompany('');
    }
  };

  return (
    <div className="add-card-form__container">
      <Header title="카드추가"></Header>
      <form
        className="add-card-form"
        onSubmit={(event) => {
          event.preventDefault();

          if (!isFormCompleted) return;

          setPage('addCardComplete');
        }}
      >
        <div className="card-preview">
          <Card
            userName={userName}
            cardCompanyName={CARD_COMPANY[cardCompany]?.NAME}
            cardColor={CARD_COMPANY[cardCompany]?.COLOR}
            cardNumber={serialNumber}
            expirationDate={MMYYDateFormatter(expirationDate)}
          />
        </div>

        <Input
          type="tel"
          label="카드번호"
          inputStyle={{ width: '100%' }}
          maxLength="19"
          onChange={onSerialNumberInputChange}
          onFocus={() => {
            if (!cardCompany && serialNumber.length === 8) {
              serialNumberInputElement.current.blur();
              onSetModalContents('cardSelection');
            }
          }}
          innerRef={serialNumberInputElement}
          inputMode="numeric"
          textAlign="center"
        />

        <Input
          type="text"
          label="만료일"
          inputStyle={{ width: '7rem' }}
          placeholder="MM/YY"
          textAlign="center"
          maxLength="5"
          value={MMYYDateFormatter(expirationDate)}
          onChange={(event) => {
            const expirationDate = event.target.value.replace('/', '');

            if (isNaN(expirationDate)) return;

            setExpirationDate(expirationDate);

            if (expirationDate.length === 4) {
              if (isValidDateFormat(expirationDate)) {
                setExpirationDateErrorMessage('');
                return;
              }

              setExpirationDateErrorMessage(ERROR_MESSAGE.INVALID_DATE_FORMAT);
            }
          }}
          onClick={() => {
            setExpirationDate('');
            expirationDateErrorMessage && setExpirationDateErrorMessage('');
          }}
          errorMessage={expirationDateErrorMessage}
        />

        <Input
          type="text"
          inputStyle={{ width: '100%' }}
          label="카드 소유자 이름(선택)"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          letterCounter={{ current: userName.length, max: 30 }}
          maxLength="30"
          value={userName}
          onChange={(event) => {
            const name = event.target.value;

            if (!isValidUserName(name)) {
              setUserNameErrorMessage('이름은 영문 및 공백만 입력이 가능합니다.');
              return;
            }

            setUserName(event.target.value.toUpperCase());
            setUserNameErrorMessage('');
          }}
          errorMessage={userNameErrorMessage}
        />

        <Input
          type="password"
          inputStyle={{ width: '5rem' }}
          label="보안코드(CVC/CVV)"
          maxLength="3"
          inputMode="numeric"
          value={securityCode}
          onChange={(event) => {
            const inputValue = event.target.value;

            if (isNaN(inputValue)) return;

            setSecurityCode(inputValue);
          }}
          textAlign="center"
        >
          <button
            type="button"
            className="security-code-guide-button"
            onClick={() => {
              onSetModalContents('questionMark');
            }}
          >
            <Icon.QuestionMark size="27px" />
          </button>
        </Input>

        <PasswordInput password={password} onSetPassword={onSetPassword}></PasswordInput>
        {isFormCompleted && (
          <div className="bottom-right-button">
            <TextButton text="다음" />
          </div>
        )}
      </form>
    </div>
  );
}
