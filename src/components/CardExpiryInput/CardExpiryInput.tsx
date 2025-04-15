import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateMonth } from "../../domain/validate";
import { validateYear } from "../../domain/validate";
import styles from './CardExpiryInput.module.css'

const CardExpiryInput = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [helperText, setHelperText] = useState('');

const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    setMonth(e.target.value);
    validateMonth(e.target.value, 2);
    setHelperText('');
  } catch (error: unknown) {
    if(error instanceof Error) setHelperText(error.message);
  }
}

const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    setYear(e.target.value);
    validateYear(e.target.value, 2);
    setHelperText('');
  } catch (error: unknown) {
    if(error instanceof Error) setHelperText(error.message);
  }
}

  return (
    <InputContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요.">
      <label htmlFor="" className='label'>유효기간</label>
      <div className={`inputContainer`}>
      <input type="text" name="month" placeholder="MM" value={month} onChange={handleMonth} className={`input`}/>
      <input type="text" name="year" placeholder="YY" value={year} onChange={handleYear} className={`input`}/>
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  )
}

export default CardExpiryInput;