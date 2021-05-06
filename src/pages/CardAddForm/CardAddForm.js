import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
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
  Spinner,
} from '../../components';
import { useInput, useModal, useMultipleInput, useFetch } from '../../hooks';
import { isNumeric, initArray } from '../../utils';
import { API, CARD, MESSAGE, REGEX, ROUTE } from '../../constants';

const CardAddForm = () => {
  const history = useHistory();

  const [createCard, fetchCreateCard] = useFetch(API.BASE_URL, {
    method: API.METHOD.POST,
  });

  const [cardNumberInputRefs] = useState(initArray(4, useRef()));
  const [pinNumberInputRefs] = useState(initArray(2, useRef()));

  const [cardCompany, setCardCompany] = useState({});

  const cardNumbers = useMultipleInput(['', '', '', ''], {
    nameSpliter: '-',
    refs: cardNumberInputRefs,
    maxLengthPerInput: 4,
  });
  const passwordDigits = useMultipleInput(['', ''], {
    nameSpliter: '-',
    refs: pinNumberInputRefs,
    maxLengthPerInput: 1,
  });

  const { Modal, isModalOpened, openModal, closeModal } = useModal(false);
  const ownerName = useInput('', { numberOnly: true, upperCase: true });
  const expiryDate = useInput('');
  const CVC = useInput('');

  const cardNumbersAsNumber = useMemo(() => cardNumbers.value.join(''), [cardNumbers.value]);

  const expiryDateAsNumber = useMemo(() => expiryDate.value.replace(REGEX.NOT_NUMBER, ''), [
    expiryDate.value,
  ]);

  const formattedExpiryDate = useMemo(() => {
    const expiryDateChunks = expiryDateAsNumber.match(REGEX.TEXT_WITH_LENGTH(2)) || [];

    return expiryDateChunks.join(' / ');
  }, [expiryDateAsNumber]);

  const isValidExpiryDate = useMemo(
    () =>
      expiryDateAsNumber.length > 0 &&
      !(Number(expiryDateAsNumber.slice(0, 2)) > 0 && Number(expiryDateAsNumber.slice(0, 2)) < 13),
    [expiryDateAsNumber]
  );

  const isNumericCardNumbers = useMemo(() => cardNumbers.value.every(isNumeric), [
    cardNumbers.value,
  ]);

  const isCardCompanySelected = useMemo(() => Object.keys(cardCompany).length > 0, [cardCompany]);

  const isCardNumberEnteredHalf = useMemo(() => {
    const [firstValue, secondValue] = cardNumbers.value;

    return firstValue.length === 4 && secondValue.length === 4;
  }, [cardNumbers.value]);

  const handleFocusCardNumberInput = (event) => {
    const [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef] = cardNumberInputRefs;

    if (event.target === thirdInputRef || event.target === fourthInputRef) {
      if (firstInputRef.value.length < 4) {
        alert(MESSAGE.CARD_NUMBER_NOT_ENTERED_HALF);
        firstInputRef?.focus();
        return;
      }

      if (secondInputRef.value.length < 4) {
        alert(MESSAGE.CARD_NUMBER_NOT_ENTERED_HALF);
        secondInputRef?.focus();
      }

      if (isCardNumberEnteredHalf && !isCardCompanySelected && !isModalOpened) {
        openModal();
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCard = {
      id: nanoid(10),
      cardNumbers: cardNumbersAsNumber,
      cardCompanyName: cardCompany.name,
      cardCompanyColor: cardCompany.color,
      ownerName: ownerName.value,
      expiryDate: expiryDate.value,
      nickname: cardCompany.name,
      createdAt: new Date(),
    };

    const response = await fetchCreateCard(newCard);

    if (response.status === API.STATUS.FAILURE) {
      alert(MESSAGE.CARD_ADD_FAILED);
      return;
    }

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

    const [, , thirdInputRef] = cardNumberInputRefs;
    thirdInputRef?.focus();
  };

  const updateCardCompany = useCallback(() => {
    const [firstValue, secondValue] = cardNumbers.value;

    if (isCardNumberEnteredHalf && !isCardCompanySelected) {
      const matchedCardCompany = findCardCompany(firstValue, secondValue);

      if (matchedCardCompany) {
        setCardCompany(matchedCardCompany);
      } else {
        openModal();
      }
    } else if (!isCardNumberEnteredHalf && isCardCompanySelected) {
      setCardCompany({});
    }
  }, [cardNumbers.value, isCardNumberEnteredHalf, isCardCompanySelected, openModal]);

  useEffect(updateCardCompany, [updateCardCompany]);

  useEffect(() => {
    const [firstInputRef] = cardNumberInputRefs;
    firstInputRef?.focus();
  }, [cardNumberInputRefs]);

  return (
    <ScreenContainer>
      <Header hasBackButton text="카드 추가" onClickBackButton={history.goBack} />
      <Styled.Container>
        <Styled.CardContainer>
          <Card
            bgColor={cardCompany?.color}
            companyName={cardCompany?.name}
            cardNumbers={cardNumbersAsNumber}
            ownerName={ownerName.value}
            expiryDate={formattedExpiryDate}
          />
        </Styled.CardContainer>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Row>
            <CardNumberInput
              ref={cardNumberInputRefs}
              values={cardNumbers.value}
              onChange={cardNumbers.onChange}
              onFocus={handleFocusCardNumberInput}
              labelText="카드 번호"
              errorMessage={!isNumericCardNumbers ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
              isError={!isNumericCardNumbers}
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.ExpiryDate>
              <InputBox
                id="expiry-date"
                value={formattedExpiryDate}
                onChange={expiryDate.onChange}
                placeholder="MM / YY"
                labelText="만료일"
                maxLength={4 + 3}
                textAlign="center"
                inputMode="numeric"
                pattern={REGEX.EXPIRY_DATE.source}
                required
                isError={isValidExpiryDate}
                errorMessage={isValidExpiryDate ? MESSAGE.INVALID_EXPIRY_DATE : ''}
              />
            </Styled.ExpiryDate>
          </Styled.Row>
          <Styled.Row>
            <InputBox
              id="owner-name"
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
                type="password"
                id="cvc"
                pattern={REGEX.NUMBER_WITH_LENGTH(3).source}
                isError={!isNumeric(CVC.value)}
                errorMessage={!isNumeric(CVC.value) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
                inputMode="numeric"
                value={CVC.value}
                onChange={CVC.onChange}
                labelText="보안 코드 (CVC/CVV)"
                maxLength={3}
                required
              />
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
              dotCount={2}
              inputMode="numeric"
              required
              isError={!isNumeric(passwordDigits.value.join(''))}
              errorMessage={
                !isNumeric(passwordDigits.value.join('')) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''
              }
            />
          </Styled.Row>
          <Styled.Row right>
            {createCard.status === API.STATUS.PENDING ? <Spinner /> : <Button>다음</Button>}
          </Styled.Row>
        </Styled.Form>
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
