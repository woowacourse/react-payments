import { AddCardExpireDateInputProps } from '../type';
import './AddCardExpireDateInput.css';

const AddCardExpireDateInput = ({ cardExpire }: AddCardExpireDateInputProps) => {
  return (
    <section className="card-expired-input-container">
      <span className="form-label">만료일</span>
      <input
        className="input-element card-expired"
        value={cardExpire.value}
        onChange={cardExpire.onChange}
        name="expire"
        required
      />
    </section>
  );
};

export default AddCardExpireDateInput;
