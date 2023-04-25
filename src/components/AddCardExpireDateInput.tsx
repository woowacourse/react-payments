import { AddCardExpireDateInputProps } from '../type';

const AddCardExpireDateInput = ({ cardExpire }: AddCardExpireDateInputProps) => {
  return (
    <div>
      <span className="form-label">만료일</span>
      <input
        className="input-box card-expired"
        value={cardExpire.value}
        onChange={cardExpire.onChange}
        name="expire"
        required
      />
    </div>
  );
};

export default AddCardExpireDateInput;
