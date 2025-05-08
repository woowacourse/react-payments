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
import { FORM_STEP_NUMBERS } from '@/hooks/useFormStep';

type FormStepItem<T = any> = {
  id: string;
  Component: React.ComponentType<T>;
  props: T;
  stepNumber: number;
};

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

  const isAllValidInput =
    canMoveNextFromPassword &&
    canMoveNextFromCVC &&
    canMoveNextFromExpireDate &&
    canMoveNextFromCardNumber &&
    selectedBrand !== null;

  const isUserCanSubmit = step >= 4 && isAllValidInput;

  const handleSubmit = (cardType: CardBrandsType, cardNumber: string) => {
    navigate('/result', { state: { cardType, cardNumber } });
  };

  const formSteps: FormStepItem[] = [
    {
      id: 'cardNumber',
      Component: CardNumberForm,
      props: {
        cardNumbers,
        errorMessage: cardErrorMessage,
        onCardInputChange: handleChange,
        onCardInputBlur: handleBlur,
      },
      stepNumber: FORM_STEP_NUMBERS.cardNumber,
    },
    {
      id: 'brand',
      Component: CardBrandSelectForm,
      props: { selectedItem: selectedBrand, onItemSelect: handleBrandSelect },
      stepNumber: FORM_STEP_NUMBERS.brand,
    },
    {
      id: 'expireDate',
      Component: ExpireDateForm,
      props: {
        expireDate,
        errorMessage: expireDateErrorMessage,
        onCardExpireDateInputChange: handleExpireDateChange,
        onCardExpireDateInputBlur: handleExpireDateBlur,
      },
      stepNumber: FORM_STEP_NUMBERS.expireDate,
    },
    {
      id: 'cvc',
      Component: CVCForm,
      props: {
        cvcNumber,
        errorMessage: cvcErrorMessage,
        onCardInputChange: handleCVCChange,
        onCardInputBlur: handleCVCBlur,
      },
      stepNumber: FORM_STEP_NUMBERS.cvc,
    },
    {
      id: 'password',
      Component: CardPasswordForm,
      props: {
        password,
        errorMessage: passwordErrorMessage,
        onCardInputChange: handlePasswordChange,
        onCardInputBlur: handlePasswordBlur,
      },
      stepNumber: FORM_STEP_NUMBERS.password,
    },
  ];

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
        {formSteps
          .sort((a, b) => b.stepNumber - a.stepNumber)
          .filter((formStep) => formStep.stepNumber <= step)
          .map((formStep) => {
            return <formStep.Component key={formStep.id} {...formStep.props} />;
          })}
      </CardFormLayout>
      {isUserCanSubmit && (
        <SubmitButton
          onSubmit={() => handleSubmit(selectedBrand as CardBrandsType, cardNumbers[0].value)}
        >
          확인
        </SubmitButton>
      )}
    </AppLayout>
  );
};
