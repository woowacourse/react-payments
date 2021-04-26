import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ScreenContainer } from '../../styles/common.styles';
import Styled from './CardAddForm.styles';
import { findCardCompany } from './CardAddForm.services';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import InputBox from '../../components/InputBox/InputBox';
import ToolTip from '../../components/ToolTip/ToolTip';
import CardNumberInput from '../../components/CardNumberInput/CardNumberInput';
import PinNumberInput from '../../components/PinNumberInput/PinNumberInput';
import Button from '../../components/Button/Button';
import CardSelector from '../../components/CardSelector/CardSelector';
import useInput from '../../hooks/useInput';
import useModal from '../../hooks/useModal';
import useLocalStorage from '../../hooks/useLocalStorage';
import useMultipleInput from '../../hooks/useMultipleInput';
import { isNumeric, initArray } from '../../utils';
import MESSAGE from '../../constants/message';
import CARD from '../../constants/card';
import LOCAL_STORAGE_KEY from '../../constants/localStorageKey';
import REGEX from '../../constants/regex';
import ROUTE from '../../constants/route';

const CardAddForm = () => {
  const history = useHistory();

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

  const { Modal, openModal, closeModal } = useModal(false);
  const ownerName = useInput('', { numberOnly: true, upperCase: true });
  const expiryDate = useInput('');
  const CVC = useInput('');

  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);

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

    cardList.setValue([...cardList.value, newCard]);

    history.push(ROUTE.COMPLETE, { card: newCard });
  };

  const handleClickCardSelector = (key) => {
    setCardCompany(CARD[key]);
    closeModal();
  };

  const updateCardCompany = useCallback(() => {
    const [firstInput, secondInput] = cardNumbers.value;

    const isFilledHalf = firstInput.length === 4 && secondInput.length === 4;
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
  }, [cardNumbers.value, cardCompany, openModal]);

  useEffect(updateCardCompany, [updateCardCompany]);

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
                value={formattedExpiryDate}
                isError={isValidExpiryDate}
                errorMessage={isValidExpiryDate ? MESSAGE.INVALID_EXPIRY_DATE : ''}
                onChange={expiryDate.onChange}
                placeholder="MM / YY"
                labelText="만료일"
                maxLength={4 + 3}
                textAlign="center"
                inputmode="numeric"
                pattern={REGEX.EXPIRY_DATE.source}
                required
              />
            </Styled.ExpiryDate>
          </Styled.Row>
          <Styled.Row>
            <InputBox
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
                pattern={REGEX.NUMBER_WITH_LENGTH(3).source}
                isError={!isNumeric(CVC.value)}
                errorMessage={!isNumeric(CVC.value) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
                inputmode="numeric"
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
              isError={!isNumeric(passwordDigits.value.join(''))}
              errorMessage={
                !isNumeric(passwordDigits.value.join('')) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''
              }
              inputmode="numeric"
              required
            />
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
