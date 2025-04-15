const CardExpiryInput = () => {
  return (
    <div>
      <label htmlFor="">유효기간</label>
      <input type="text" name="month" placeholder="MM"/>
      <input type="text" name="year" placeholder="YY"/>
      <p>helperText</p>
    </div>
  )
}

export default CardExpiryInput;