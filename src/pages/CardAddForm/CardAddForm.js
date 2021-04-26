import { useHistory } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { Container } from '../common/common.styles';
import Styled from './CardAddForm.styles';
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
import { isNumeric } from '../../utils';
import MESSAGE from '../../constants/message';
import CARD from '../../constants/card';

const CardAddForm = () => {
  const history = useHistory();

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [passwordDigits, setPasswordDigits] = useState(['', '']);
  const [cardCompany, setCardCompany] = useState({});

  const { Modal, modalRef, openModal, closeModal } = useModal(false);
  const ownerName = useInput('', { upperCase: true });
  const expiryDate = useInput('');
  const CVC = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeCardNumber = (event) => {
    const [, , index] = event.target.name.split('-');

    setCardNumbers((state) => {
      const newCardNumbers = [...state];
      newCardNumbers[index] = event.target.value;

      return newCardNumbers;
    });
  };

  const handleChangePasswordDigits = (event) => {
    const [, index] = event.target.name.split('-');

    setPasswordDigits((state) => {
      const newPasswordDigits = [...state];
      newPasswordDigits[index] = event.target.value;

      return newPasswordDigits;
    });
  };

  const handleClickCardSelector = (key) => {
    setCardCompany(CARD[key]);
    closeModal();
  };

  const cardNumbersAsNumber = useMemo(() => cardNumbers.join(''), [cardNumbers]);

  const expiryDateAsNumber = useMemo(() => expiryDate.value.replace(/[^0-9]/g, ''), [
    expiryDate.value,
  ]);

  const formattedExpiryDate = useMemo(() => {
    const expiryDateChunks = expiryDateAsNumber.match(/.{1,2}/g) || [];
    return expiryDateChunks.join(' / ');
  }, [expiryDateAsNumber]);

  const isValidExpiryDate = useMemo(
    () =>
      expiryDateAsNumber.length > 0 &&
      !(Number(expiryDateAsNumber.slice(0, 2)) > 0 && Number(expiryDateAsNumber.slice(0, 2)) < 13),
    [expiryDateAsNumber]
  );

  const isNumericCardNumbers = useMemo(() => cardNumbers.every(isNumeric), [cardNumbers]);

  // 배민 페이의 경우 모달이 뜨고 닫힐 때, 세번째 카드 번호 input에 focus 시 모달이 다시 뜸
  // TODO: modal이 떴을 때, focusout(blur) 처리되도록 구현해야 함
  useEffect(() => {
    const [firstInput, secondInput] = cardNumbers;

    const isFilledHalf = firstInput.length === 4 && secondInput.length === 4;
    const isCardCompanySelected = Object.keys(cardCompany).length > 0;

    if (isFilledHalf && !isCardCompanySelected) {
      const matchedCardCompany = Object.values(CARD).find((company) =>
        company.bins.some((binNumber) => {
          const isMatchedFirstInput = firstInput === binNumber.slice(0, 4);
          const isMatchedSecondInput = secondInput === binNumber.slice(4, 6);

          return binNumber.length === 4
            ? isMatchedFirstInput
            : isMatchedFirstInput && isMatchedSecondInput;
        })
      );

      if (matchedCardCompany) {
        setCardCompany(matchedCardCompany);
      } else {
        openModal();
      }
    } else if (!isFilledHalf && isCardCompanySelected) {
      setCardCompany({});
    }
  }, [cardNumbers, cardNumbersAsNumber, cardCompany, openModal, modalRef]);

  return (
    <Container>
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
              values={cardNumbers}
              onChange={handleChangeCardNumber}
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
                pattern="^[0-9]*$"
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
              labelText="카드 비밀번호"
              values={passwordDigits}
              onChange={handleChangePasswordDigits}
              dotCount={2}
              isError={!isNumeric(passwordDigits.join(''))}
              errorMessage={!isNumeric(passwordDigits.join('')) ? MESSAGE.REQUIRE_NUMBER_ONLY : ''}
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
    </Container>
  );
};
export default CardAddForm;
