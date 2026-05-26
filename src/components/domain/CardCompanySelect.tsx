import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Select from '../ui/Select';
import { CARD_COMPANY_OPTIONS, ERROR_MESSAGES } from '../../constants';
import { validate } from '../../utils';
import type { BaseValidationRule } from '../../types';

interface CardCompanySelectProps {
  value: CardInfo['cardCompany'];
  errorStatuses: [ErrorStatus];
  onUpdated: (value: CardInfo['cardCompany']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus]) => void;
  onValid: (value: CardInfo['cardCompany']) => void;
  validationRules: BaseValidationRule[];
  ref?: React.Ref<HTMLSelectElement>;
}

export default function CardCompanySelect({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
  ref,
}: CardCompanySelectProps) {
  const errorStatus = errorStatuses[0];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules, 'onChange', inputValue);
    onErrorUpdated([error]);
    if (error) return;
    onUpdated(inputValue as CardInfo['cardCompany']);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value as CardInfo['cardCompany'];
    const errorStatus = validate(validationRules, 'onBlur', inputValue);
    onErrorUpdated([errorStatus]);
    if (!errorStatus) onValid(inputValue);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드사를 선택해 주세요',
    caption: '현재 국내 카드사만 가능합니다.',
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <Select
        ref={ref}
        autoFocus
        variant={errorStatus ? 'error' : 'default'}
        value={value}
        options={CARD_COMPANY_OPTIONS}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
