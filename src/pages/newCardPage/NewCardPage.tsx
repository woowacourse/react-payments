import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../components/common/input/Input';
import Select from '../../components/common/select/Select';
import { ICardInfo, IErrorMessage } from '../../types/type';
import NewCardInputSection from '../../components/newCardInputSection/NewCardInputSection';
import {
  validateCVC,
  validateCardCompany,
  validateCardExpiration,
  validateCardNumber,
  validatePassword,
  validateUserName,
} from '../../validators/newCardInputValidator';
import { CARD_FORM_INPUTS } from '../../constants/setting';
import CardFrontPreview from '../../components/cardPreview/CardFrontPreview';
import CardBackPreview from '../../components/cardPreview/cardBackPreview';
import Button from '../../components/common/button/Button';
import * as Styled from './NewCardPage.styled';
import { useNavigate } from 'react-router-dom';

const NewCardPage = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: ['', '', '', ''],
    cardCompany: '',
    cardExpiration: ['', ''],
    userName: '',
    cvc: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    cardNumbers: ['', '', '', ''],
    cardCompany: [''],
    cardExpiration: ['', ''],
    userName: [''],
    cvc: [''],
    password: [''],
  });
  const [creationStage, setCreationStage] = useState(1);
  const [preview, setPreview] = useState('front');
  const navigate = useNavigate();

  useEffect(() => {
    updateCardCompanyVisibility();
  }, [cardInfo.cardNumbers]);

  useEffect(() => {
    updateCardExpirationVisibility();
  }, [cardInfo.cardCompany]);

  useEffect(() => {
    updateUserNameVisibility();
  }, [cardInfo.cardExpiration]);

  useEffect(() => {
    updateCVCVisibility();
  }, [cardInfo.userName]);

  useEffect(() => {
    updatePasswordVisibility();
  }, [cardInfo.cvc]);

  useEffect(() => {
    updateFormSubmitBtnVisibility();
  }, [cardInfo.password]);

  const focusNextInput = (currentInput: HTMLInputElement) => {
    const nextInput = currentInput.nextSibling as HTMLInputElement | null;
    if (nextInput && nextInput instanceof HTMLInputElement) {
      nextInput.focus();
    }
  };

  const handleCardNumbersChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;
    const errorMessageCopy = [...errorMessage.cardNumbers];
    errorMessageCopy[index] = validateCardNumber(value);

    setPreview('front');

    setErrorMessage({
      ...errorMessage,
      cardNumbers: [
        errorMessageCopy[0],
        errorMessageCopy[1],
        errorMessageCopy[2],
        errorMessageCopy[3],
      ],
    });

    if (errorMessageCopy[index] === '') {
      const newCardNumbers = [...cardInfo.cardNumbers];
      newCardNumbers[index] = value;
      setCardInfo({
        ...cardInfo,
        cardNumbers: [
          newCardNumbers[0],
          newCardNumbers[1],
          newCardNumbers[2],
          newCardNumbers[3],
        ],
      });

      if (value.length === 4) {
        focusNextInput(event.target);
      }
    }
  };

  const updateCardCompanyVisibility = () => {
    const isAllEntered = cardInfo.cardNumbers.every(
      (element) => element.length === 4,
    );
    const isValidValue = errorMessage.cardNumbers.every(
      (element) => element === '',
    );

    if (isAllEntered && isValidValue && creationStage < 2) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCardCompanyChange = (value: string) => {
    const errorMessageCopy = validateCardCompany(value);

    setPreview('front');

    setErrorMessage({
      ...errorMessage,
      userName: [errorMessageCopy],
    });

    setCardInfo({
      ...cardInfo,
      cardCompany: value,
    });
  };

  const updateCardExpirationVisibility = () => {
    if (cardInfo.cardCompany !== '' && creationStage < 3) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCardExpirationChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;
    const errorMessageCopy = [...errorMessage.cardExpiration];
    errorMessageCopy[index] = validateCardExpiration(value, index);

    setPreview('front');

    setErrorMessage({
      ...errorMessage,
      cardExpiration: [errorMessageCopy[0], errorMessageCopy[1]],
    });

    if (errorMessageCopy[index] === '') {
      const newCardExpiration = [...cardInfo.cardExpiration];
      newCardExpiration[index] = value;

      setCardInfo({
        ...cardInfo,
        cardExpiration: [newCardExpiration[0], newCardExpiration[1]],
      });

      if (value.length === 2) {
        focusNextInput(event.target);
      }
    }
  };

  const updateUserNameVisibility = () => {
    const isAllEntered = cardInfo.cardExpiration.every(
      (element) => element.length == 2,
    );
    const isValidValue = errorMessage.cardExpiration.every(
      (element) => element === '',
    );

    if (isAllEntered && isValidValue && creationStage < 4) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleUserNameChange = (value: string) => {
    const errorMessageCopy = validateUserName(value);
    setPreview('front');

    setErrorMessage({
      ...errorMessage,
      userName: [errorMessageCopy],
    });

    if (errorMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        userName: value.toUpperCase(),
      });
    }
  };

  const updateCVCVisibility = () => {
    if (cardInfo.userName !== '' && creationStage < 5) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCVCChange = (value: string) => {
    const errorMessageCopy = validateCVC(value);
    setPreview('back');

    setErrorMessage({
      ...errorMessage,
      cvc: [errorMessageCopy],
    });

    if (errorMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        cvc: value,
      });
    }
  };

  const updatePasswordVisibility = () => {
    if (cardInfo.cvc !== '' && creationStage < 6) {
      setCreationStage(creationStage + 1);
    }
  };

  const handlePasswordChange = (value: string) => {
    const erroMessageCopy = validatePassword(value);
    setPreview('front');

    setErrorMessage({
      ...errorMessage,
      password: [erroMessageCopy],
    });

    if (erroMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        password: value,
      });
    }
  };

  const updateFormSubmitBtnVisibility = () => {
    if (cardInfo.password !== '' && creationStage < 7) {
      setCreationStage(creationStage + 1);
    }
  };

  const isAllValidInput = () => {
    const isCardInfoValid = Object.values(cardInfo).every(
      (value) => value !== '',
    );
    const isErrorMessageValid = Object.values(errorMessage).every((errors) =>
      errors.every((error: string) => error === ''),
    );
    return isCardInfoValid && isErrorMessageValid;
  };

  const navigateToRegistrationCompletePage = () => {
    navigate('/registration-complete', {
      state: {
        cardFirstFourDigits: cardInfo.cardNumbers[0],
        cardCompany: cardInfo.cardCompany,
      },
    });
  };

  return (
    <Styled.NewCardContainer>
      {preview === 'front' && <CardFrontPreview cardInfo={cardInfo} />}
      {preview === 'back' && <CardBackPreview cvc={cardInfo.cvc} />}
      <Styled.NewCardInputSectionWrapper>
        <NewCardInputSection
          label={CARD_FORM_INPUTS.CARD_NUMBERS.LABEL}
          mainText={CARD_FORM_INPUTS.CARD_NUMBERS.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.CARD_NUMBERS.SUB_TEXT}
          errorMessage={errorMessage.cardNumbers}
        >
          {cardInfo.cardNumbers.map((_, index) => (
            <Input
              key={index}
              maxLength={CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.CARD_NUMBERS.PLACEHOLDER}
              isError={!!errorMessage.cardNumbers[index]}
              onChange={(event) => handleCardNumbersChange(event, index)}
            ></Input>
          ))}
        </NewCardInputSection>
        {creationStage >= 2 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CARD_COMPANY.LABEL}
            mainText={CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CARD_COMPANY.SUB_TEXT}
          >
            <Select
              options={CARD_FORM_INPUTS.CARD_COMPANY.OPTIONS}
              onChange={(e) => handleCardCompanyChange(e.target.value)}
              value={cardInfo.cardCompany}
            ></Select>
          </NewCardInputSection>
        )}
        {creationStage >= 3 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CARD_EXPIRATION.LABEL}
            mainText={CARD_FORM_INPUTS.CARD_EXPIRATION.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CARD_EXPIRATION.SUB_TEXT}
            errorMessage={errorMessage.cardExpiration}
          >
            {cardInfo.cardExpiration.map((_, index) => (
              <Input
                autoFocus={index === 0}
                key={index}
                maxLength={CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH}
                placeholder={
                  index === 0
                    ? CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.MONTH
                    : CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.YEAR
                }
                isError={!!errorMessage.cardExpiration[index]}
                onChange={(event) => handleCardExpirationChange(event, index)}
              ></Input>
            ))}
          </NewCardInputSection>
        )}
        {creationStage >= 4 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.USER_NAME.LABEL}
            mainText={CARD_FORM_INPUTS.USER_NAME.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.USER_NAME.SUB_TEXT}
            errorMessage={errorMessage.userName}
          >
            <Input
              value={cardInfo.userName}
              autoFocus
              maxLength={CARD_FORM_INPUTS.USER_NAME.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.USER_NAME.PLACEHOLDER}
              isError={!!errorMessage.userName[0]}
              onChange={(e) => handleUserNameChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}
        {creationStage >= 5 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.CVC.LABEL}
            mainText={CARD_FORM_INPUTS.CVC.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.CVC.SUB_TEXT}
            errorMessage={errorMessage.cvc}
          >
            <Input
              maxLength={CARD_FORM_INPUTS.CVC.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.CVC.PLACEHOLDER}
              isError={!!errorMessage.cvc[0]}
              onChange={(e) => handleCVCChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}
        {creationStage >= 6 && (
          <NewCardInputSection
            label={CARD_FORM_INPUTS.PASSWORD.LABEL}
            mainText={CARD_FORM_INPUTS.PASSWORD.MAIN_TEXT}
            subText={CARD_FORM_INPUTS.PASSWORD.SUB_TEXT}
            errorMessage={errorMessage.password}
          >
            <Input
              type='password'
              autoFocus
              maxLength={CARD_FORM_INPUTS.PASSWORD.MAX_LENGTH}
              placeholder={CARD_FORM_INPUTS.PASSWORD.PLACEHOLDER}
              isError={!!errorMessage.password[0]}
              onChange={(e) => handlePasswordChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}
      </Styled.NewCardInputSectionWrapper>
      {isAllValidInput() && (
        <Button
          onClick={navigateToRegistrationCompletePage}
          text='확인'
        ></Button>
      )}
    </Styled.NewCardContainer>
  );
};

export default NewCardPage;
