import { RefObject } from 'react';
import styled from 'styled-components';
import { DropdownOptionType } from '../../../../types/dropdown';
import { Dropdown } from '../../../common/Dropdown';
import CVCInputField from '../InputField/CVCInputField';
import CardNumberInputField from '../InputField/CardNumberInputField';
import CardPasswordInputField from '../InputField/CardPasswordInputField';
import ExpirationDateInputField from '../InputField/ExpirationDateInputField';
import InputSection from '../InputSection/InputSection';
import { CARD_BANK } from '../config/card';
import { ErrorType } from '../config/error';
import {
  CardNumberInputType,
  ExpirationDateInputType,
} from '../config/inputField';
import { InputNameType } from '../config/step';
import { getStepIndex } from '../utils/step';
import PaymentsSubmitButton from './PaymentsSubmitButton';

type PaymentsFormFieldsProps = {
  paymentsFormValues: {
    cardNumber: Record<CardNumberInputType, string>;
    cardBank: DropdownOptionType | null;
    expirationDate: Record<ExpirationDateInputType, string>;
    CVC: string;
    cardPassword: string;
  };
  paymentsFormInputRefs: {
    cardNumber: Record<CardNumberInputType, RefObject<HTMLInputElement | null>>;
    expirationDate: Record<
      ExpirationDateInputType,
      RefObject<HTMLInputElement | null>
    >;
    CVC: RefObject<HTMLInputElement | null>;
    cardPassword: RefObject<HTMLInputElement | null>;
  };
  paymentsFormErrorTypes: {
    cardNumber: Record<CardNumberInputType, ErrorType[]>;
    CVC: ErrorType[];
    cardPassword: ErrorType[];
  };
  paymentsFormHandlers: {
    cardNumber: ({
      name,
      value,
    }: {
      name: CardNumberInputType;
      value: string;
    }) => void;
    cardBank: React.Dispatch<React.SetStateAction<DropdownOptionType | null>>;
    expirationDate: ({
      name,
      value,
    }: {
      name: ExpirationDateInputType;
      value: string;
    }) => void;
    CVC: (value: string) => void;
    cardPassword: (value: string) => void;
  };
  paymentFormBlurHandlers: {
    cardNumber: (e: React.ChangeEvent) => void;
    expirationDate: (e: React.ChangeEvent) => void;
    CVC: (e: React.ChangeEvent) => void;
    cardPassword: (e: React.ChangeEvent) => void;
  };
  inputStep: InputNameType;
  allInputComplete: boolean;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
};

function PaymentsFormFields({
  paymentsFormValues,
  paymentsFormInputRefs,
  paymentsFormErrorTypes,
  paymentsFormHandlers,
  paymentFormBlurHandlers,
  inputStep,
  allInputComplete,
  handleSubmit,
}: PaymentsFormFieldsProps) {
  return (
    <PaymentsInputForm>
      {getStepIndex(inputStep) >= getStepIndex('cardPassword') && (
        <InputSection
          title="비밀번호를 입력해 주세요"
          caption="앞의 2자리를 입력해주세요"
        >
          <CardPasswordInputField
            inputValue={paymentsFormValues.cardPassword}
            inputRef={paymentsFormInputRefs.cardPassword}
            errorTypes={paymentsFormErrorTypes.cardPassword}
            handleInputValue={paymentsFormHandlers.cardPassword}
            onBlur={paymentFormBlurHandlers.cardPassword}
          />
        </InputSection>
      )}

      {getStepIndex(inputStep) >= getStepIndex('CVC') && (
        <InputSection title="CVC 번호를 입력해 주세요">
          <CVCInputField
            inputValue={paymentsFormValues.CVC}
            inputRef={paymentsFormInputRefs.CVC}
            errorTypes={paymentsFormErrorTypes.CVC}
            handleInputValue={paymentsFormHandlers.CVC}
            onBlur={paymentFormBlurHandlers.CVC}
          />
        </InputSection>
      )}

      {getStepIndex(inputStep) >= getStepIndex('expirationDate') && (
        <InputSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpirationDateInputField
            inputValues={paymentsFormValues.expirationDate}
            inputRefs={paymentsFormInputRefs.expirationDate}
            handleInputValue={paymentsFormHandlers.expirationDate}
            onBlur={paymentFormBlurHandlers.expirationDate}
          />
        </InputSection>
      )}

      {getStepIndex(inputStep) >= getStepIndex('cardBank') && (
        <InputSection
          title="카드사를 선택해 주세요"
          caption="현재 국내 카드사만 가능합니다."
        >
          <Dropdown
            options={Object.entries(CARD_BANK).map(([key, value]) => ({
              label: value.label,
              value: key,
            }))}
            selectedValue={paymentsFormValues.cardBank}
            setSelectedValue={paymentsFormHandlers.cardBank}
            placeholder="카드사를 선택해주세요"
          />
        </InputSection>
      )}

      <InputSection
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      >
        <CardNumberInputField
          inputValues={paymentsFormValues.cardNumber}
          inputRefs={paymentsFormInputRefs.cardNumber}
          errorTypes={paymentsFormErrorTypes.cardNumber}
          handleInputValue={paymentsFormHandlers.cardNumber}
          onBlur={paymentFormBlurHandlers.cardNumber}
        />
      </InputSection>

      {allInputComplete && <PaymentsSubmitButton handleSubmit={handleSubmit} />}
    </PaymentsInputForm>
  );
}

const PaymentsInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default PaymentsFormFields;
