import React, { useState } from 'react';
import { Icon, Input } from '../../../components';

const SecurityCodeInput = ({ securityCode, onInputChange, onSetModalContents }) => {
  const [error, setError] = useState('');

  const onChange = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setError('숫자만 입력할 수 있습니다.');
      return;
    }

    setError('');
    onInputChange(event);
  };

  return (
    <Input
      id="card-security-code"
      name="securityCode"
      type="password"
      inputStyle={{ width: '5rem' }}
      label="보안코드(CVC/CVV)"
      maxLength="3"
      inputmode="numeric"
      value={securityCode}
      onChange={onChange}
      textAlign="center"
      errorMessage={error}
    >
      <button
        type="button"
        className="ml-3"
        onClick={() => {
          onSetModalContents('questionMark');
        }}
      >
        <Icon.QuestionMark size="27px" />
      </button>
    </Input>
  );
};

export default SecurityCodeInput;
