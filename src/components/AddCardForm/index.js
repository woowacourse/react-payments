import React, { useState, useRef } from 'react';
import { CARD_COMPANY, ERROR_MESSAGE } from '../../constants';
import { Icon, Card, Input, Header, TextButton, PasswordInput } from '../../stories/components';
import { cardSerialNumberFormatter, MMYYDateFormatter } from '../../utils/formatter';
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
}) {
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] = useState('');

  const inputEl = useRef(null);

  return (
    <div className="add-card-form__container">
      <Header title="카드추가"></Header>
      <form className="add-card-form">
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
          type="text"
          label="카드번호"
          width="100%"
          maxLength="19"
          onKeyDown={(event) => {
            if (!/^[0-9]{1}$/.test(event.key) && event.key !== 'Backspace') return;

            const currentLocation =
              event.target.selectionStart - Math.floor(event.target.selectionStart / 5);

            if (event.key === 'Backspace') {
              if (currentLocation === 0) return;

              setSerialNumber(
                serialNumber.slice(0, currentLocation - 1) + serialNumber.slice(currentLocation)
              );
              return;
            }

            if (serialNumber.length === 16) return;

            setSerialNumber(
              serialNumber.slice(0, currentLocation) +
                event.key +
                serialNumber.slice(currentLocation)
            );
          }}
          onChange={(event) => {
            //TODO: '-' 위치가 변화 할 때 생기는 커서 이동 문제 해결 필요함
            inputEl.current.value = cardSerialNumberFormatter(serialNumber);

            const currentLocation = event.target.selectionStart;
            inputEl.current.setSelectionRange(currentLocation, currentLocation);

            if (serialNumber.length === 8) {
              inputEl.current.blur();
              onSetModalContents('cardSelection');
            }

            if (cardCompany && serialNumber.length < 8) {
              setCardCompany('');
            }
          }}
          onFocus={() => {
            if (!cardCompany && serialNumber.length === 8) {
              inputEl.current.blur();
              onSetModalContents('cardSelection');
            }
          }}
          innerRef={inputEl}
          inputMode="numeric"
          textAlign="center"
        />

        <Input
          type="text"
          label="만료일"
          width="7rem"
          placeholder="MM/YY"
          textAlign="center"
          maxLength="5"
          value={MMYYDateFormatter(expirationDate)}
          onChange={(event) => {
            const expirationDate = event.target.value.replace('/', '');

            setExpirationDate(expirationDate);

            if (expirationDate.length === 4) {
              const isValidDateFormat = /^(?:0[1-9]|1[0-2])(\d{2})$/.test(expirationDate);

              if (isValidDateFormat) {
                setExpirationDateErrorMessage('');
                return;
              }

              setExpirationDateErrorMessage(ERROR_MESSAGE.INVALID_DATE_FORMAT);
            }
          }}
          errorMessage={expirationDateErrorMessage}
        />

        <Input
          type="text"
          width="100%"
          label="카드 소유자 이름(선택)"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          letterCounter={{ current: userName.length, max: 30 }}
          maxLength="30"
          value={userName}
          onChange={(event) => {
            //TODO: 이름은 영어로만 입력할 수 있습니다. 경고 표시
            const name = event.target.value;
            if (/[^a-zA-Z ]/.test(name)) {
              return;
            }

            setUserName(event.target.value.toUpperCase());
          }}
        />

        <Input
          type="password"
          width="5rem"
          label="보안코드(CVC/CVV)"
          maxLength="3"
          inputMode="numeric"
          value={securityCode}
          onChange={(event) => {
            setSecurityCode(event.target.value);
          }}
          textAlign="center"
          Icon={Icon.QuestionMark}
        >
          <button
            type="button"
            style={{
              display: 'inherit',
              background: 'none',
              outline: '0',
              border: '0',
              cursor: 'pointer',
              margin: '0 0 0 12px',
              padding: '0',
              boxSizing: 'content-box',
            }}
          >
            <Icon.QuestionMark size="27px" />
          </button>
        </Input>

        <PasswordInput password={password} setPassword={setPassword}></PasswordInput>
        <div className="bottom-right-button">
          <TextButton text="다음" />
        </div>
      </form>
    </div>
  );
}
