import { useState } from 'react';
import Input from '../../components/input/Input';
import CardPreview from '../../components/cardPreview/CardPreview';
import { ICardInfo, IErrorMessage } from '../../types/type';
import NewCardInputSection from '../../components/newCardInputSection/NewCardInputSection';
import { NewCardContainer } from './NewCardPage.styled';
import {
  validateCardExpiration,
  validateCardNumber,
  validateUserName,
} from '../../validators/newCardInputValidator';
import {
  CARD_EXPIRATION,
  CARD_NUMBERS,
  USER_NAME,
} from '../../constants/setting';

const NewCardPage = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: [0, 0, 0, 0],
    cardExpiration: [0, 0],
    userName: '',
  });
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    cardNumbers: ['', '', '', ''],
    cardExpiration: ['', ''],
    userName: [''],
  });

  const handleCardNumbersChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardNumbers];
    errorMessageCopy[index] = validateCardNumber(value);

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
      newCardNumbers[index] = Number(value);
      setCardInfo({
        ...cardInfo,
        cardNumbers: [
          newCardNumbers[0],
          newCardNumbers[1],
          newCardNumbers[2],
          newCardNumbers[3],
        ],
      });
    }
  };

  const handleCardExpirationChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardExpiration];
    errorMessageCopy[index] = validateCardExpiration(value, index);

    setErrorMessage({
      ...errorMessage,
      cardExpiration: [errorMessageCopy[0], errorMessageCopy[1]],
    });

    if (errorMessageCopy[index] === '') {
      const newCardExpiration = [...cardInfo.cardExpiration];
      newCardExpiration[index] = Number(value);
      setCardInfo({
        ...cardInfo,
        cardExpiration: [newCardExpiration[0], newCardExpiration[1]],
      });
    }
  };

  const handleUserNameChange = (value: string) => {
    const errorMessageCopy = validateUserName(value);

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

  return (
    <NewCardContainer>
      <CardPreview cardInfo={cardInfo}></CardPreview>
      <NewCardInputSection
        label={CARD_NUMBERS.LABEL}
        mainText={CARD_NUMBERS.MAIN_TEXT}
        subText={CARD_NUMBERS.SUB_TEXT}
        errorMessage={errorMessage.cardNumbers}
      >
        {cardInfo.cardNumbers.map((_, index) => (
          <Input
            key={index}
            maxLength={CARD_NUMBERS.MAX_LENGTH}
            placeholder={CARD_NUMBERS.PLACEHOLDER}
            isError={!!errorMessage.cardNumbers[index]}
            onChange={(e) => handleCardNumbersChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
      <NewCardInputSection
        label={CARD_EXPIRATION.LABEL}
        mainText={CARD_EXPIRATION.MAIN_TEXT}
        subText={CARD_EXPIRATION.SUB_TEXT}
        errorMessage={errorMessage.cardExpiration}
      >
        {cardInfo.cardExpiration.map((_, index) => (
          <Input
            key={index}
            maxLength={CARD_EXPIRATION.MAX_LENGTH}
            placeholder={
              index === 0
                ? CARD_EXPIRATION.PLACEHOLDER.MONTH
                : CARD_EXPIRATION.PLACEHOLDER.YEAR
            }
            isError={!!errorMessage.cardExpiration[index]}
            onChange={(e) => handleCardExpirationChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
      <NewCardInputSection
        label={USER_NAME.LABEL}
        mainText={USER_NAME.MAIN_TEXT}
        subText={USER_NAME.SUB_TEXT}
        errorMessage={errorMessage.userName}
      >
        <Input
          value={cardInfo.userName}
          maxLength={USER_NAME.MAX_LENGTH}
          placeholder={USER_NAME.PLACEHOLDER}
          isError={!!errorMessage.userName[0]}
          onChange={(e) => handleUserNameChange(e.target.value)}
        ></Input>
      </NewCardInputSection>
    </NewCardContainer>
  );
};

export default NewCardPage;
