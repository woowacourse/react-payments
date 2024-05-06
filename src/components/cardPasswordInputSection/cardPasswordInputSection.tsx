import React from 'react';
import { CARD_FORM_INPUTS } from '../../constants/setting';
import { Input } from '../common/input/Input.styled';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardPasswordInputSectionProps {
  errorMessage: { password: string[] };
  handleCardPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardPasswordInputSection: React.FC<CardPasswordInputSectionProps> = ({
  errorMessage,
  handleCardPassword,
}) => {
  return (
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
        $isError={!!errorMessage.password[0]}
        onChange={(event) => handleCardPassword(event)}
      ></Input>
    </NewCardInputSection>
  );
};

export default CardPasswordInputSection;
