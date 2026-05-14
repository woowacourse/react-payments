import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Select from '../ui/Select';
import { CARD_COMPANY_OPTIONS, ERROR_MESSAGES } from '../../constants';
import { useEffect, useRef } from 'react';
import { validate } from '../../utils';
import type { BaseValidationRule } from '../../types';

interface CardCompanySelectProps {
  value: CardInfo['cardCompany'];
  errorStatuses: [ErrorStatus];
  onUpdated: (value: CardInfo['cardCompany']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus]) => void;
  onValid: (value: CardInfo['cardCompany']) => void;
  validationRules: BaseValidationRule[];
}

export default function CardCompanySelect({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
}: CardCompanySelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const errorStatus = errorStatuses[0];

  useEffect(() => {
    selectRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules, 'onChange', inputValue);
    onErrorUpdated([error as ErrorStatus]);
    if (error) return;
    onUpdated(inputValue as CardInfo['cardCompany']);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value as CardInfo['cardCompany'];
    const errorStatus = validate(validationRules, 'onBlur', inputValue) as ErrorStatus;
    onErrorUpdated([errorStatus]);
    if (!errorStatus) onValid(inputValue);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드사를 선택해 주세요',
    caption: '현재 국내 카드사만 가능합니다.',
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <Select
        ref={selectRef}
        variant={errorStatus ? 'error' : 'default'}
        value={value}
        options={CARD_COMPANY_OPTIONS}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
