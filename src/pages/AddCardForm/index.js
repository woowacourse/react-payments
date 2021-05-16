import React, { useState, useRef, useEffect, useContext } from 'react';
import { CARD, CARD_COMPANY, PATH } from '../../constants';
import {
  Icon,
  Card,
  Input,
  Header,
  TextButton,
  CardPasswordInput,
  Modal,
  Select,
} from '../../components';
import { useHistory } from 'react-router-dom';
import { CardsContext } from '../../cardsContext';
import { idGenerator } from '../../utils/idGenerator';
import useForm from '../../hooks/useForm';
import SerialNumberInput from './Inputs/SerialNumberInput';
import ExpirationDateInput from './Inputs/ExpirationDateInput';
import UserNameInput from './Inputs/UserNameInput';
import { ReactComponent as SecurityCodeGuide } from '../../assets/securityGuideImage.svg';

const initialAddCardForm = {
  number: '',
  company: '',
  expirationDate: '',
  userName: '',
  securityCode: '',
  password: { first: '', second: '' },
};

export default function AddCardForm() {
  const history = useHistory();
  const dispatch = useContext(CardsContext);

  const [
    { number, company, expirationDate, userName, securityCode, password },
    onInputChange,
    setInput,
    reset,
  ] = useForm(initialAddCardForm);

  const [securityCodeErrorMessage, setSecurityCodeErrorMessage] = useState('');

  const serialInputElement = useRef(null);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContents, setModalContents] = useState('cardSelection');

  const isFormCompleted =
    number.length === CARD.SERIAL_NUMBER_LENGTH &&
    company &&
    expirationDate.length === CARD.EXPIRATION_DATE_LENGTH &&
    securityCode.length === CARD.SECURITY_CODE_LENGTH &&
    password.first &&
    password.second;

  const onSetModalContents = (name) => {
    setModalContents(name);

    setIsModalOpened(true);
  };

  useEffect(() => {
    serialInputElement.current.focus();
  }, [company]);

  const onSetPassword = (key, event) => {
    const { name, value } = event.target;

    if (isNaN(value)) return;

    setInput(name, { ...password, [key]: value });
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

    dispatch({ type: 'ADD_CARD', card: newCard });
    reset();

    history.push(`${PATH.EDIT_CARD_NICKNAME}/${newCardId}`);
  };

  return (
    <div>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <Icon.LeftArrow size="16px" color="#525252" />
        </button>
        <h1>카드 추가</h1>
      </Header>
      <form
        className="contents add-card-form w-100 d-flex flex-col relative items-center"
        onSubmit={onCardFormSubmit}
      >
        <div className="mb-10">
          <Card
            userName={userName}
            companyName={CARD_COMPANY[company]?.NAME}
            color={CARD_COMPANY[company]?.COLOR}
            number={number}
            expirationDate={expirationDate}
          />
        </div>

        <SerialNumberInput
          number={number}
          company={company}
          setInput={setInput}
          onSetModalContents={onSetModalContents}
          forwardRef={serialInputElement}
        />
        <ExpirationDateInput expirationDate={expirationDate} setInput={setInput} />
        <UserNameInput userName={userName} onInputChange={onInputChange} />

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
            className="ml-3"
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

      {isModalOpened && (
        <Modal onCloseModal={() => setIsModalOpened(false)}>
          {modalContents === 'cardSelection' && (
            <Select
              options={CARD_COMPANY}
              onSelect={(key) => {
                setInput('company', key);
                setIsModalOpened(false);
              }}
            ></Select>
          )}
          {modalContents === 'questionMark' && <SecurityCodeGuide />}
        </Modal>
      )}
    </div>
  );
}
