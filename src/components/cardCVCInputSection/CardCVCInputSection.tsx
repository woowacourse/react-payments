import React from 'react';
import { CARD_FORM_INPUTS } from '../../constants/setting';
import { Input } from '../common/input/Input.styled';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardCVCInputSectionProps {
  errorMessage: { cvc: string[] };
  handleCardCVC: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
}

const CardCVCInputSection: React.FC<CardCVCInputSectionProps> = ({
  errorMessage,
  handleCardCVC,
  setPreview,
}) => {
  return (
    <NewCardInputSection
      label={CARD_FORM_INPUTS.CVC.LABEL}
      mainText={CARD_FORM_INPUTS.CVC.MAIN_TEXT}
      subText={CARD_FORM_INPUTS.CVC.SUB_TEXT}
      errorMessage={errorMessage.cvc}
    >
      <Input
        maxLength={CARD_FORM_INPUTS.CVC.MAX_LENGTH}
        placeholder={CARD_FORM_INPUTS.CVC.PLACEHOLDER}
        $isError={!!errorMessage.cvc[0]}
        onChange={(event) => handleCardCVC(event)}
        onFocus={() => setPreview('back')}
        onBlur={() => setPreview('front')}
      ></Input>
    </NewCardInputSection>
  );
};

export default CardCVCInputSection;
