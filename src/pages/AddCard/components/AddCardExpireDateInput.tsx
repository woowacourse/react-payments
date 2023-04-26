import InputContainer from '../../../components/InputContainer';
import { AddCardExpireDateInputProps } from '../../../type';
import { calcMultipleStatus } from '../domain/domain';
import './AddCardExpireDateInput.css';

const AddCardExpireDateInput = ({ expireMonth, expireYear }: AddCardExpireDateInputProps) => {
  const status = calcMultipleStatus([expireMonth.status, expireYear.status]);
  return (
    <InputContainer className="card-expired-input-container" status={status} inputType="expired">
      <span className="form-label">만료일</span>
      <div className="card-expired-input">
        <input
          className="card-expired"
          value={expireMonth.value}
          onChange={expireMonth.onChange}
          name="month"
          maxLength={2}
          required
        />
        <span>/</span>
        <input
          className="card-expired"
          value={expireYear.value}
          onChange={expireYear.onChange}
          maxLength={2}
          name="year"
          required
        />
      </div>
    </InputContainer>
  );
};

export default AddCardExpireDateInput;
