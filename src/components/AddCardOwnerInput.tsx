import type { AddCardOwnerInputProps } from '../type';

const AddCardOwnerInput = ({ cardOwner }: AddCardOwnerInputProps) => {
  return (
    <div>
      <div className="card-owner-container-header">
        <span className="form-label">카드 소유자 이름(선택)</span>
        <span className="form-label">{cardOwner.value.length}/30</span>
      </div>
      <input
        className="input-box card-owner"
        value={cardOwner.value}
        onChange={cardOwner.onChange}
        name="owner"
      />
    </div>
  );
};

export default AddCardOwnerInput;
