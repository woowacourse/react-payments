import { useNavigate } from 'react-router';

import { AppLayout } from '../../components/common/AppLayout';
import { Flex } from '../../components/common/Flex';
import { SubmitButton } from '../../components/features/Buttons/SubmitButton';
import { CardBrandSelectForm } from '../../components/features/CardFormFiled/CardBrandSelectForm';
import { CardNumberForm } from '../../components/features/CardFormFiled/CardNumberForm';
import { CardPasswordForm } from '../../components/features/CardFormFiled/CardPasswordForm';
import { CVCForm } from '../../components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '../../components/features/CardFormFiled/ExpireDateForm';
import { CardPreview } from '../../components/features/CardPreview';
import { useBrandSelectInput } from '../../hooks/useBrandSelectInput';
import { useCardInput } from '../../hooks/useCardInput';
import { useExpireDateInput } from '../../hooks/useExpireDateInput';
import { CardFormLayout } from '@/components/features/CardFormLayout';
import { CardBrandsType } from '@/components/features/CardPreview/cardBrand.types';
import { useFormStep } from '@/hooks/useFormStep';

export const Register = () => {
  const navigate = useNavigate();

  const {
    value: cardNumbers,
    errorMessage: cardErrorMessage,
    handleChange,
    handleBlur,
    isAllValidAndFilled: canMoveNextFromCardNumber,
  } = useCardInput('cardNumber');

  const { selectedItem: selectedBrand, handleItemSelect: handleBrandSelect } =
    useBrandSelectInput();

  const {
    value: expireDate,
    errorMessage: expireDateErrorMessage,
    handleChange: handleExpireDateChange,
    handleBlur: handleExpireDateBlur,
    isAllValidAndFilled: canMoveNextFromExpireDate,
  } = useExpireDateInput();

  const {
    value: cvcNumber,
    errorMessage: cvcErrorMessage,
    handleChange: handleCVCChange,
    handleBlur: handleCVCBlur,
    isAllValidAndFilled: canMoveNextFromCVC,
  } = useCardInput('CVC');

  const {
    value: password,
    errorMessage: passwordErrorMessage,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    isAllValidAndFilled: canMoveNextFromPassword,
  } = useCardInput('password');

  const { step } = useFormStep({
    canMoveNextFromCardNumber,
    canMoveNextFromCVC,
    canMoveNextFromExpireDate,
    selectedBrand,
    canMoveNextFromPassword,
  });

  const isAllClearInput =
    step >= 4 &&
    canMoveNextFromPassword &&
    canMoveNextFromCVC &&
    canMoveNextFromExpireDate &&
    canMoveNextFromCardNumber &&
    selectedBrand !== null;

  const handleSubmit = (cardType: CardBrandsType, cardNumber: string) => {
    navigate('/result', { state: { cardType, cardNumber } });
  };

  return (
    <AppLayout>
      <Flex padding="20px 0" flex={0}>
        <CardPreview
          cardNumbers={cardNumbers}
          expireDate={expireDate}
          cardBrand={selectedBrand as CardBrandsType}
        />
      </Flex>
      <CardFormLayout>
        {step >= 4 && (
          <CardPasswordForm
            password={password}
            errorMessage={passwordErrorMessage}
            onCardInputChange={handlePasswordChange}
            onCardInputBlur={handlePasswordBlur}
          />
        )}

        {step >= 3 && (
          <CVCForm
            cvcNumber={cvcNumber}
            errorMessage={cvcErrorMessage}
            onCardInputChange={handleCVCChange}
            onCardInputBlur={handleCVCBlur}
          />
        )}

        {step >= 2 && (
          <ExpireDateForm
            expireDate={expireDate}
            errorMessage={expireDateErrorMessage}
            onCardExpireDateInputChange={handleExpireDateChange}
            onCardExpireDateInputBlur={handleExpireDateBlur}
          />
        )}

        {step >= 1 && (
          <CardBrandSelectForm selectedItem={selectedBrand} onItemSelect={handleBrandSelect} />
        )}

        <CardNumberForm
          cardNumbers={cardNumbers}
          errorMessage={cardErrorMessage}
          onCardInputChange={handleChange}
          onCardInputBlur={handleBlur}
        />
      </CardFormLayout>
      {isAllClearInput && (
        <SubmitButton
          onSubmit={() => handleSubmit(selectedBrand as CardBrandsType, cardNumbers[0].value)}
        >
          확인
        </SubmitButton>
      )}
    </AppLayout>
  );
};
