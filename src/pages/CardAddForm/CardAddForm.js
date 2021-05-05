import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ScreenContainer } from '../../styles/common.styles';
import Styled from './CardAddForm.styles';
import { findCardCompany } from './CardAddForm.services';
import {
  Header,
  Card,
  InputBox,
  ToolTip,
  CardNumberInput,
  PinNumberInput,
  Button,
  CardSelector,
} from '../../components';
import {
  useInput,
  useModal,
  useMultipleInput,
  useVirtualNumericKeyboard,
  useServerAPI,
} from '../../hooks';
import { isNumeric, initArray } from '../../utils';
import {
  CARD,
  STORAGE_KEY,
  MESSAGE,
  REGEX,
  ROUTE,
  LENGTH_OF_CVC_INPUT,
  NUM_OF_CARD_NUMBER_INPUT_SECTION,
  NUM_OF_PIN_NUMBER_INPUT_SECTION,
  NUM_OF_CARD_NUMBER_PER_INPUT_SECTION,
  NUM_OF_PIN_NUMBER_PER_INPUT_SECTION,
  HALF_NUM_OF_EXPIRY_INPUT,
  MAX_MONTH,
  EXPIRY_INPUT_SEPARATOR,
} from '../../constants';

const initState = {
  cardNumbers: ['', '', '', ''],
  pinNumbers: ['', ''],
};

const CardAddForm = () => {
  const history = useHistory();

  const [cardNumberInputRefs] = useState(initArray(NUM_OF_CARD_NUMBER_INPUT_SECTION, useRef()));
  const [pinNumberInputRefs] = useState(initArray(NUM_OF_PIN_NUMBER_INPUT_SECTION, useRef()));

  const [cardCompany, setCardCompany] = useState({});

  const cardNumbers = useMultipleInput(initState.cardNumbers, {
    nameSpliter: '-',
    refs: cardNumberInputRefs,
    maxLengthPerInput: NUM_OF_CARD_NUMBER_PER_INPUT_SECTION,
  });
  const passwordDigits = useMultipleInput(initState.pinNumbers, {
    nameSpliter: '-',
    refs: pinNumberInputRefs,
    maxLengthPerInput: NUM_OF_PIN_NUMBER_PER_INPUT_SECTION,
  });

  const { Modal, openModal, closeModal } = useModal(false);

  const ownerName = useInput('', { numberOnly: true, upperCase: true });
  const expiryDate = useInput('');
  const CVC = useInput('');

  const addCVCNumber = (number) => {
    CVC.setValue((state) => {
      const newState = (state + number).slice(0, LENGTH_OF_CVC_INPUT);

      CVC.setValue(newState);
    });
  };

  const deleteCVCNumber = () => CVC.setValue((state) => state.slice(0, -1));

  const emptyIndex = passwordDigits.value.findIndex((value) => value === '');

  const addPasswordDigit = (number) => {
    passwordDigits.setValue((state) => {
      const newState = [...state];
      newState[emptyIndex] = number;

      return newState;
    });
  };

  const deletePasswordDigit = () => {
    const filledIndex = pinNumberInputRefs.reverse().findIndex((ref) => ref.value !== '');
    if (filledIndex === -1) return;

    passwordDigits.setValue((state) => {
      const newState = [...state];
      newState[NUM_OF_PIN_NUMBER_INPUT_SECTION - filledIndex - 1] = '';

      return newState;
    });
  };

  const {
    VirtualNumericKeyboard: CVCVirtualNumericKeyboard,
    openModal: openCVCVKModal,
    closeModal: closeCVCVKModal,
  } = useVirtualNumericKeyboard(false, addCVCNumber, deleteCVCNumber);

  const {
    VirtualNumericKeyboard: PinNumberVirtualNumericKeyboard,
    openModal: openPinNumberVKModal,
    closeModal: closePinNumberVKModal,
  } = useVirtualNumericKeyboard(false, addPasswordDigit, deletePasswordDigit);

  const cardList = useServerAPI(STORAGE_KEY.CARD_LIST);

  const cardNumbersAsNumber = cardNumbers.value.join('');

  const expiryDateAsNumber = expiryDate.value.replace(REGEX.NOT_NUMBER, '');

  const formattedExpiryDate = (() => {
    const expiryDateChunks = expiryDateAsNumber.match(REGEX.TEXT_WITH_LENGTH(2)) || [];
    return expiryDateChunks.join(EXPIRY_INPUT_SEPARATOR);
  })();

  const isValidExpiryDate =
    expiryDateAsNumber.length > 0 &&
    !(
      Number(expiryDateAsNumber.slice(0, HALF_NUM_OF_EXPIRY_INPUT)) > 0 &&
      Number(expiryDateAsNumber.slice(0, HALF_NUM_OF_EXPIRY_INPUT)) <= MAX_MONTH
    );

  const isNumericCardNumbers = cardNumbers.value.every(isNumeric);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      id: nanoid(10),
      cardNumbers: cardNumbersAsNumber,
      cardCompanyName: cardCompany.name,
      cardCompanyColor: cardCompany.color,
      ownerName: ownerName.value,
      expiryDate: expiryDate.value,
      nickname: cardCompany.name,
    };

    if (!cardList.value) {
      cardList.setValue([]);
    }

    cardList.addEntity(newCard);

    history.push({
      pathname: ROUTE.COMPLETE,
      state: {
        card: newCard,
      },
    });
  };

  const handleClickCardSelector = (key) => {
    setCardCompany(CARD[key]);
    closeModal();
  };

  const updateCardCompany = () => {
    const [firstInput, secondInput] = cardNumbers.value;

    const isFilledHalf =
      firstInput.length === NUM_OF_CARD_NUMBER_PER_INPUT_SECTION &&
      secondInput.length === NUM_OF_CARD_NUMBER_PER_INPUT_SECTION;
    const isCardCompanySelected = Object.keys(cardCompany).length > 0;

    if (isFilledHalf && !isCardCompanySelected) {
      const matchedCardCompany = findCardCompany(firstInput, secondInput);

      if (matchedCardCompany) {
        setCardCompany(matchedCardCompany);
      } else {
        openModal();
      }
    } else if (!isFilledHalf && isCardCompanySelected) {
      setCardCompany({});
    }
  };

  useEffect(updateCardCompany, [updateCardCompany]);

  useEffect(() => {
    const [firstCardNumberInput] = cardNumberInputRefs;
    firstCardNumberInput.focus();
  }, [cardNumberInputRefs]);

  useEffect(() => {
    if (CVC.value.length === LENGTH_OF_CVC_INPUT) {
      closeCVCVKModal();
    }
  }, [CVC.value, closeCVCVKModal]);

  useEffect(() => {
    if (emptyIndex === -1) {
      closePinNumberVKModal();
    }
  }, [emptyIndex, closePinNumberVKModal]);

  return (
    <ScreenContainer>
      <Header hasBackButton text="카드 추가" onClickBackButton={history.goBack} />
      <Styled.Container>
        <Card
          bgColor={cardCompany?.color}
          companyName={cardCompany?.name}
          cardNumbers={cardNumbersAsNumber}
          ownerName={ownerName.value}
          expiryDate={formattedExpiryDate}
        />
        <form onSubmit={handleSubmit}>
          <Styled.Row>
            <CardNumberInput
              ref={cardNumberInputRefs}
              values={cardNumbers.value}
              onChange={cardNumbers.onChange}
              labelText="카드 번호"
              errorMessage={!isNumericCardNumbers ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
              isError={!isNumericCardNumbers}
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.ExpiryDate>
              <InputBox
                id="expiry-date-input-box"
                value={formattedExpiryDate}
                isError={isValidExpiryDate}
                errorMessage={isValidExpiryDate ? MESSAGE.INVALID_EXPIRY_DATE : ''}
                onChange={expiryDate.onChange}
                placeholder="MM / YY"
                labelText="만료일"
                maxLength={NUM_OF_CARD_NUMBER_PER_INPUT_SECTION * 2 - 1}
                textAlign="center"
                inputmode="numeric"
                pattern={REGEX.EXPIRY_DATE.source}
                required
              />
            </Styled.ExpiryDate>
          </Styled.Row>
          <Styled.Row>
            <InputBox
              id="owner-name-input-box"
              value={ownerName.value}
              onChange={ownerName.onChange}
              labelText="카드 소유자 이름 (선택)"
              maxLength={30}
              hasLengthCounter
            />
          </Styled.Row>

          <Styled.Row>
            <Styled.CVC>
              <InputBox
                id="password-input-box"
                type="password"
                pattern={REGEX.NUMBER_WITH_LENGTH(3).source}
                isError={!isNumeric(CVC.value)}
                errorMessage={!isNumeric(CVC.value) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
                inputmode="numeric"
                value={CVC.value}
                onChange={CVC.onChange}
                onFocus={openCVCVKModal}
                labelText="보안 코드 (CVC/CVV)"
                maxLength={3}
                readOnly
                required
              />
              <CVCVirtualNumericKeyboard />
            </Styled.CVC>
            <Styled.ToolTip>
              <ToolTip buttonText="?" contentText={MESSAGE.CVC_TOOLTIP} />
            </Styled.ToolTip>
          </Styled.Row>

          <Styled.Row>
            <PinNumberInput
              ref={pinNumberInputRefs}
              labelText="카드 비밀번호"
              values={passwordDigits.value}
              onChange={passwordDigits.onChange}
              onFocus={openPinNumberVKModal}
              dotCount={2}
              isError={!isNumeric(passwordDigits.value?.join(''))}
              errorMessage={
                !isNumeric(passwordDigits.value?.join('')) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''
              }
              inputmode="numeric"
              required
              readOnly
            />
            <PinNumberVirtualNumericKeyboard />
          </Styled.Row>
          <Styled.Row right>
            <Button>다음</Button>
          </Styled.Row>
        </form>
      </Styled.Container>

      <Modal mobile>
        <Styled.CardSelect>
          {Object.entries(CARD).map(([key, company]) => (
            <CardSelector
              key={key}
              title={company.name}
              logo={company.logo}
              onClick={() => handleClickCardSelector(key)}
            />
          ))}
        </Styled.CardSelect>
      </Modal>
    </ScreenContainer>
  );
};

export default CardAddForm;
