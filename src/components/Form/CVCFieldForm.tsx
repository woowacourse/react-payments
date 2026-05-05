import { ChangeEvent, useState } from 'react';
import { cvcValidator } from '../../utils/validate';
import InputFieldForm from '../Common/Form/InputFieldForm';
import { INPUT_FIELD_CONFIG } from '../../constants';
import { convertValueFormat } from '../../utils/convert';

export default function CVCFieldForm() {
  const [cvcNumbers, setCVCNumbers] = useState<string>('');

  const handleCVCNumbersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCVCNumbers(e.target.value);
  };

  return (
    <InputFieldForm
      fieldConfig={INPUT_FIELD_CONFIG['CVC']}
      valueList={convertValueFormat(cvcNumbers)}
      validator={cvcValidator}
      onChange={handleCVCNumbersChange}
    />
  );
}
