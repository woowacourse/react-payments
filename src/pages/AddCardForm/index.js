import React, { useState, useRef, useEffect, useContext } from 'react';
import { CARD, CARD_COMPANY, ERROR_MESSAGE, PATH } from '../../constants';
import {
  Icon,
  Card,
  Input,
  Header,
  TextButton,
  InputWithCounter,
  CardPasswordInput,
} from '../../components';
import { cardSerialNumberFormatter, MMYYDateFormatter } from '../../utils/formatter';
import { isValidSerialNumber, isValidDateFormat, isValidUserName } from './validator';
import './style.css';
import { useHistory } from 'react-router-dom';
import { CardsContext } from '../../cardsContext';
import { idGenerator } from '../../utils/idGenerator';

export default function AddCardForm({
  onSetModalContents,
  number,
  company,
  expirationDate,
  userName,
  securityCode,
  password,
  onInputChange,
  setInput,
  setCurrentCardId,
  reset,
}) {
  const dispatch = useContext(CardsContext);

  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] = useState('');
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
  const [securityCodeErrorMessage, setSecurityCodeErrorMessage] = useState('');

  const serialNumberInputElement = useRef(null);

  const history = useHistory();

  const isFormCompleted =
    isValidSerialNumber(number) &&
    company &&
    isValidDateFormat(expirationDate) &&
    securityCode.length === CARD.SECURITY_CODE_LENGTH &&
    password.first &&
    password.second;

  useEffect(() => {
    serialNumberInputElement.current.focus();
  }, [company]);

  const onSetPassword = (key, event) => {
    const { name, value } = event.target;

    if (isNaN(value)) return;

    setInput(name, { ...password, [key]: value });
  };

  const offsetByInputType = {
    deleteContentBackward: -1,
    insertText: 1,
  };

  const getOffset = (inputType, selectionStart) => {
    if (inputType === 'insertText') {
      return selectionStart !== 0 && selectionStart % (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1) === 0
        ? offsetByInputType[inputType]
        : 0;
    }

    if (inputType === 'deleteContentBackward') {
      return selectionStart !== 0 &&
        (selectionStart + 1) % (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1) === 0
        ? offsetByInputType[inputType]
        : 0;
    }

    return 0;
  };

  const getCurrentSerialNumber = {
    deleteContentBackward: (serialIndex) => {
      return number.slice(0, serialIndex - 1) + number.slice(serialIndex);
    },
    insertText: (serialIndex, insertKey) => {
      return number.slice(0, serialIndex) + insertKey + number.slice(serialIndex);
    },
    insertFromPaste: () => {
      throw new Error('붙여 넣기는 할 수 없습니다.');
    },
  };

  const onSerialNumberInputChange = (event) => {
    const inputKey = event.nativeEvent.data;
    const inputValue = event.target.value.replaceAll('-', '');

    if (isNaN(inputKey)) {
      event.target.value = cardSerialNumberFormatter(number);
      return;
    }

    const inputType = event.nativeEvent.inputType;
    const selectionStart = event.target.selectionStart;
    const offset = getOffset(inputType, selectionStart);
    const currentLocation = selectionStart + offset;

    const name = event.target.name;

    try {
      const serialIndex =
        currentLocation -
        Math.floor(currentLocation / (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1)) -
        offsetByInputType[inputType];
      const currentSerialNumber = getCurrentSerialNumber[inputType](serialIndex, inputKey);

      const value = cardSerialNumberFormatter(currentSerialNumber);

      event.target.value = value;

      setInput(name, currentSerialNumber);
      setCardNumberErrorMessage('');

      event.target.setSelectionRange(currentLocation, currentLocation);

      if (inputValue.length === CARD.SERIAL_ID_CODE_LENGTH) {
        serialNumberInputElement.current.blur();
        onSetModalContents('cardSelection');
      }

      if (company && inputValue.length < CARD.SERIAL_ID_CODE_LENGTH) {
        setInput(name, '');
      }
    } catch (error) {
      setInput(name, '');
      event.target.value = '';
      setCardNumberErrorMessage(error.message);
    }
  };

  const onCardFormSubmit = (event) => {
    event.preventDefault();

    if (!isFormCompleted) return;

    const newCardId = idGenerator.getId();

    const newCard = {
      id: newCardId,
      userName: userName.toUpperCase(),
      company,
      number,
      expirationDate: expirationDate,
      securityCode: securityCode,
      password: { first: password.first, second: password.second },
      nickname: company,
    };

    setCurrentCardId(newCardId);
    dispatch({ type: 'ADD_CARD', card: newCard });

    reset();

    history.push(`${PATH.ADD_CARD_COMPLETE}/${newCardId}`);
  };

  return (
    <div className="add-card-form__container">
      <Header title="카드추가" />
      <form className="add-card-form" onSubmit={onCardFormSubmit}>
        <div className="card-preview">
          <Card
            userName={userName}
            companyName={CARD_COMPANY[company]?.NAME}
            color={CARD_COMPANY[company]?.COLOR}
            number={number}
            expirationDate={expirationDate}
          />
        </div>

        <Input
          id="card-number"
          name="number"
          type="tel"
          label="카드번호"
          inputStyle={{ width: '100%' }}
          maxLength="19"
          onChange={onSerialNumberInputChange}
          onFocus={() => {
            if (!company && number.length === CARD.SERIAL_ID_CODE_LENGTH) {
              serialNumberInputElement.current.blur();
              onSetModalContents('cardSelection');
            }
          }}
          forwardRef={serialNumberInputElement}
          inputmode="numeric"
          textAlign="center"
          errorMessage={cardNumberErrorMessage}
        />

        <Input
          id="expiration-date"
          name="expirationDate"
          type="text"
          label="만료일"
          inputStyle={{ width: '7rem' }}
          placeholder="MM/YY"
          textAlign="center"
          maxLength="5"
          inputmode="numeric"
          value={expirationDate}
          onChange={(event) => {
            const inputValue = event.target.value.replace('/', '');
            const { name } = event.target;

            try {
              if (isNaN(inputValue)) throw Error('숫자만 입력가능합니다.');

              const formattedDate = MMYYDateFormatter(inputValue);
              setInput(name, formattedDate);

              if (formattedDate.length === CARD.EXPIRATION_DATE_LENGTH) {
                if (isValidDateFormat(formattedDate)) {
                  setExpirationDateErrorMessage('');
                  return;
                }

                setExpirationDateErrorMessage(ERROR_MESSAGE.INVALID_DATE_FORMAT);
              }
            } catch (error) {
              setInput(name, '');
              setExpirationDateErrorMessage(error.message);
            }
          }}
          onClick={({ target }) => {
            setInput(target.name, '');
            expirationDateErrorMessage && setExpirationDateErrorMessage('');
          }}
          errorMessage={expirationDateErrorMessage}
        />

        <InputWithCounter
          id="user-name"
          name="userName"
          type="text"
          inputStyle={{ width: '100%' }}
          label="카드 소유자 이름(선택)"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          letterCounter={{ current: userName.length, max: CARD.USER_NAME_MAX_LENGTH }}
          maxLength={CARD.USER_NAME_MAX_LENGTH}
          value={userName}
          onChange={(event) => {
            const name = event.target.value;

            if (!isValidUserName(name)) {
              setUserNameErrorMessage(ERROR_MESSAGE.INVALID_USER_NAME);
              return;
            }

            onInputChange(event);
            setUserNameErrorMessage('');
          }}
          errorMessage={userNameErrorMessage}
        />

        <Input
          id="card-security-code"
          name="securityCode"
          type="password"
          inputStyle={{ width: '5rem' }}
          label="보안코드(CVC/CVV)"
          maxLength="3"
          inputmode="numeric"
          value={securityCode}
          onChange={(event) => {
            const inputValue = event.target.value;

            if (isNaN(inputValue)) {
              setSecurityCodeErrorMessage('숫자만 입력할 수 있습니다.');
              return;
            }

            setSecurityCodeErrorMessage('');
            onInputChange(event);
          }}
          textAlign="center"
          errorMessage={securityCodeErrorMessage}
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

        <CardPasswordInput
          name="password"
          password={password}
          onSetPassword={onSetPassword}
        ></CardPasswordInput>
        {isFormCompleted && (
          <div className="bottom-right-button">
            <TextButton>다음</TextButton>
          </div>
        )}
      </form>
    </div>
  );
}
