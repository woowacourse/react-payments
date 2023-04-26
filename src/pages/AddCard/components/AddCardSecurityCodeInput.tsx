import type { AddCardSecurityCodeInputProps } from '../../../type';
import cvcInfo from '../../../asset/cvc_info.png';

import './AddCardSecurityCodeInput.css';
import InputContainer from '../../../components/InputContainer';

const AddCardSecurityCodeInput = ({ securityCode }: AddCardSecurityCodeInputProps) => {
  return (
    <InputContainer
      className="card-security-code-container"
      status={securityCode.status}
      inputType="security-code"
    >
      <span className="form-label">보안코드(CVC/CVV)</span>
      <div className="card-security-code-box">
        <input
          className="input-password-container password-cvc"
          type="password"
          maxLength={3}
          minLength={3}
          value={securityCode.value}
          onChange={securityCode.onChange}
          required
        />
        <button type="button" className="cvc-info-button">
          <img src={cvcInfo} alt="cvc_info" />
        </button>
        <div className="cvc-info-box">
          <p>CVC란?</p>
          <p>카드 뒷면의 3자리 숫자입니다.</p>
        </div>
      </div>
    </InputContainer>
  );
};

export default AddCardSecurityCodeInput;
