import type { AddCardOwnerInputProps } from '../type';
import './AddCardOwnerInput.css';

const AddCardOwnerInput = ({ cardOwner }: AddCardOwnerInputProps) => {
  return (
    <section className="card-owner-input-container">
      <div className="card-owner-input-container-header">
        <span className="form-label">카드 소유자 이름(선택)</span>
        <span className="form-label">{cardOwner.value.length}/30</span>
      </div>
      <input
        className="input-element card-owner"
        value={cardOwner.value}
        onChange={cardOwner.onChange}
        name="owner"
      />
    </section>
  );
};

export default AddCardOwnerInput;
