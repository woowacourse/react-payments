import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './cardInfoInputs/CardNumberInput';
import { ExpirationDateInput } from './cardInfoInputs/ExpirationDateInput';
import { OwnerNameInput } from './cardInfoInputs/OwnerNameInput';
import { SecurityCodeInput } from './cardInfoInputs/SecurityCodeInput';
import { PasswordInput } from './cardInfoInputs/PasswordInput';
import { CardViewer } from '../cardViewer';
import { useNavigate } from 'react-router-dom';
import { useFocus } from '../../hooks/useFocus';
import { useCardData } from '../../hooks/useCardData';
import { COMPANIES } from '../../constants/cardCompany';
import { BottomSheet } from '../modal/template/BottomSheet';
import { SelectCardCompanyModal } from '../modal/content/selectCardCompany';

export const AddNewCardForm = () => {
  const navigate = useNavigate();

  const { addNewCard } = useCardData();

  const [inputOrder, setInputOrder] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const [companyId, setCompanyId] = useState<keyof typeof COMPANIES>();

  const {
    inputRefs: cardNumberInputRefs,
    focusInputByIndex: focusCardNumberInputByIndex,
  } = useFocus(4);

  const {
    inputRefs: expirationDateInputRefs,
    focusInputByIndex: focusExpirationDateInputByIndex,
  } = useFocus(2);

  const { inputRefs: ownerNameInputRefs } = useFocus(1);

  const { inputRefs: securityCodeInputRefs } = useFocus(1);

  const {
    inputRefs: passwordInputRefs,
    focusInputByIndex: focusPasswordInputByIndex,
  } = useFocus(2);

  const viewNextInput = useCallback(() => {
    setInputOrder((current) => current + 1);
  }, []);

  const viewPreviousInput = useCallback(() => {
    setInputOrder((current) => current - 1);
  }, []);

  const handleSubmitNewCardInfo = () => {
    addNewCard({
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
      companyId,
    });

    navigate('/');
  };

  return (
    <Style.Wrapper
      onSubmit={(e) => {
        e.preventDefault();

        addNewCard({
          cardNumber,
          expirationDate,
          ownerName,
          securityCode,
          password,
          companyId,
        });

        navigate('/');
      }}
    >
      {isModalOpen && (
        <BottomSheet setIsOpen={setIsModalOpen}>
          <SelectCardCompanyModal
            setSelectedCardCompany={setCompanyId}
            closeModal={() => setIsModalOpen(false)}
          />
        </BottomSheet>
      )}
      <CardViewer
        cardInfo={{ cardNumber, expirationDate, ownerName, companyId }}
        handleClick={() => setIsModalOpen(true)}
      />
      {companyId ? (
        <Style.InputContainer>
          {inputOrder === 0 && (
            <CardNumberInput
              ref={cardNumberInputRefs}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              focusCardNumberInputByIndex={focusCardNumberInputByIndex}
              viewNextInput={viewNextInput}
            />
          )}

          {inputOrder === 1 && (
            <ExpirationDateInput
              ref={expirationDateInputRefs}
              expirationDate={expirationDate}
              setExpirationDate={setExpirationDate}
              focusNextExpirationDateInput={focusExpirationDateInputByIndex}
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 2 && (
            <OwnerNameInput
              ref={ownerNameInputRefs}
              ownerName={ownerName}
              setOwnerName={setOwnerName}
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 3 && (
            <SecurityCodeInput
              ref={securityCodeInputRefs}
              securityCode={securityCode}
              setSecurityCode={setSecurityCode}
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 4 && (
            <PasswordInput
              ref={passwordInputRefs}
              password={password}
              setPassword={setPassword}
              focusPasswordInputByIndex={focusPasswordInputByIndex}
              viewPreviousInput={viewPreviousInput}
              handleSubmitNewCardInfo={handleSubmitNewCardInfo}
            />
          )}
        </Style.InputContainer>
      ) : (
        <Style.Caption>{isModalOpen || '카드 클릭!'}</Style.Caption>
      )}
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    width: max-content;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;

    gap: 19px;
  `,
  Caption: styled.span`
    margin-top: -10px;
    font-size: 20px;
    font-weight: bold;
  `,
};
