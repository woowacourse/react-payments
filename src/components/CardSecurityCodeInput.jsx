import React from 'react';

import Input from './common/Input.jsx';
import InputField from './common/InputField.jsx';
import DescriptionIconButton from './common/DescriptionIconButton.jsx';

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from '../constants';

import QuestionMarkIcon from '../assets/images/questionMarkIcon.svg';

const SECURITY_CODE_DESCRIPTION = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

export default function CardSecurityCodeInput({ securityCode, onChange }) {
  return (
    <InputField
      labelText="보안 코드(CVC/CVV)"
      OptionalComponent={<DescriptionIconButton iconImage={QuestionMarkIcon} description={SECURITY_CODE_DESCRIPTION} />}
      wrapperWidth="85px"
      isComplete={securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH}>
      <Input
        type="password"
        placeholder={CREATE_MASKED_CHARACTERS(3)}
        value={securityCode}
        maxLength="3"
        onChange={onChange}
        width="100%"
        isComplete={securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
      />
    </InputField>
  );
}
