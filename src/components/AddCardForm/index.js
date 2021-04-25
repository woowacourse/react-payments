import React, { useRef } from 'react';
import { Icon, Card, Input, Header, TextButton, PasswordInput } from '../../stories/components';
import { cardSerialNumberFormatter, MMYYDateFormatter } from '../../utils/formatter';
import './style.css';

export default function AddCardForm({
  serialNumber,
  setSerialNumber,
  expirationDate,
  setExpirationDate,
  userName,
  setUserName,
  securityCode,
  setSecurityCode,
  password,
  setPassword,
}) {
  const inputEl = useRef(null);

  return (
    <div className="add-card-form__container">
      <Header title="카드추가"></Header>
      <form className="add-card-form">
        <div className="card-preview">
          <Card
            userName={userName}
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
            setExpirationDate(event.target.value.replace('/', ''));
          }}
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
            setUserName(event.target.value);
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
