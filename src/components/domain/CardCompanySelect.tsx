import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Select from '../ui/Select';
import { CARD_COMPANY_OPTIONS, ERROR_MESSAGES } from '../../constants';
import { useState } from 'react';

interface CardCompanySelectProps {
  value: CardInfo['cardCompany'];
  onUpdated: (value: CardInfo['cardCompany']) => void;
}

export default function CardCompanySelect({ value, onUpdated }: CardCompanySelectProps) {
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdated(e.target.value as CardInfo['cardCompany']);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setErrorStatus(e.target.value === '' ? 'required' : null);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드사를 선택해 주세요',
    caption: '현재 국내 카드사만 가능합니다.',
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <Select variant={errorStatus ? 'error' : 'default'} value={value} options={CARD_COMPANY_OPTIONS} onChange={handleChange} onBlur={handleBlur} />
    </FormField>
  );
}
