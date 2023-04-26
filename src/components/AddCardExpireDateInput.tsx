import { AddCardExpireDateInputProps } from '../type';
import './AddCardExpireDateInput.css';

const AddCardExpireDateInput = ({ expireMonth, expireYear }: AddCardExpireDateInputProps) => {
  return (
    <section className="card-expired-input-container">
      <span className="form-label">만료일</span>
      <div className="card-expired-input">
        <input
          className="card-expired"
          value={expireMonth.value}
          onChange={expireMonth.onChange}
          name="month"
          type="number"
          required
        />
        <span>/</span>
        <input
          className="card-expired"
          value={expireYear.value}
          onChange={expireYear.onChange}
          name="year"
          type="number"
          required
        />
      </div>
    </section>
  );
};

export default AddCardExpireDateInput;
