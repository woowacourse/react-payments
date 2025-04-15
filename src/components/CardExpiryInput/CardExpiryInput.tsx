import InputContainer from "../InputContainer/InputContainer";

const CardExpiryInput = () => {
  return (
    <InputContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요.">
      <label htmlFor="">유효기간</label>
      <input type="text" name="month" placeholder="MM"/>
      <input type="text" name="year" placeholder="YY"/>
      <p>helperText</p>
    </InputContainer>
  )
}

export default CardExpiryInput;