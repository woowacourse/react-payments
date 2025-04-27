import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useEffect, useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import useError from '@/hooks/useError';
import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import { CardNumbersOptions } from '@/types/CardNumbers';
import { CardExpirationDateOptions } from '@/types/CardExpirationDateOptions';
import { useCardCVCNumberOptions } from '@/hooks/useCardCVCNumber';
import useFieldCompletion from '@/hooks/useFieldCompletion';
import { CardPasswordOptions } from '@/hooks/useCardPassword';
import CardPasswordInputSection from '@/components/InputSection/CardPasswordInputSection';

type CardFormPagesProps = {
  cardNumbersForm: CardNumbersOptions;
  cardCVCNumberForm: useCardCVCNumberOptions;
  cardExpirationDateForm: CardExpirationDateOptions;
  cardPasswordForm: CardPasswordOptions;
  canSubmit: () => boolean;
};

const CardFormPages = ({
  cardNumbersForm,
  cardCVCNumberForm,
  cardExpirationDateForm,
  cardPasswordForm,
  canSubmit,
}: CardFormPagesProps) => {
  const [cardCompany, setCardCompany] = useState('');
  const { error: cardCompanyError, clearError: clearCardCompanyError } =
    useError({
      cardCompany: false,
    });

  const isFieldCompletetion = useFieldCompletion({
    cardNumbersForm,
    cardCompany,
    cardExpirationDateForm,
    cardCVCNumberForm,
  });

  const nav = useNavigate();
  const handleSubmit = () => {
    nav('/complete');
  };

  return (
    <>
      <CardDisplay
        cardNumbers={cardNumbersForm.cardNumbers}
        cardExpirationDate={cardExpirationDateForm.cardExpirationDate}
        cardCompany={cardCompany}
      />

      <div className={styles.cardForm}>
        {isFieldCompletetion[3] && (
          <CardPasswordInputSection {...cardPasswordForm} />
        )}

        {isFieldCompletetion[2] && (
          <CardCVCNumberInputSection {...cardCVCNumberForm} />
        )}
        {isFieldCompletetion[1] && (
          <CardExpirationDateInputSection {...cardExpirationDateForm} />
        )}
        {isFieldCompletetion[0] && (
          <CardCompanySelectSection
            cardCompany={cardCompany}
            setCardCompany={setCardCompany}
            isError={cardCompanyError.isError.cardCompany}
            errorMessage={cardCompanyError.errorMessage}
            clearError={() => clearCardCompanyError('cardCompany')}
          />
        )}
        <CardNumbersInputSection {...cardNumbersForm} />
      </div>
      {canSubmit() && (
        <ConfirmButton
          type="submit"
          text="확인"
          onClick={handleSubmit}
          className={buttonStyle.cardConfirm}
        />
      )}
    </>
  );
};

export default CardFormPages;
