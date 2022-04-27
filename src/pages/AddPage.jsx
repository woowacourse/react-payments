import { useState } from "react";

import Card from "../components/Card";
import InputBox from '../components/InputBox';
import { Input } from '../components/Input/style';
 
// header
// card
// form
// footer?

function AddPage() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [dueDate, setDueDate] = useState(['', '']);

  const handleCardNumber = (index,e) => {
    setCardNumbers((prev)=>{
      const newState = [...prev];
      newState[index] = e.target.value;
      return newState;
    })
  }

  const handleDueDate = (index,e) => {
    setDueDate((prev)=>{
      const newState = [...prev];
      newState[index] = e.target.value;
      return newState;
    })
  }

  return (
    <>
      <Card 
        size='small' 
        company= 'poco'
        cardNumbers={cardNumbers}
        owner= 'dory'
        dueDate={dueDate} />
      <label>카드번호</label>
      <InputBox>
        {Array.from({length: 4}, (_,index) => <Input type="number" value={cardNumbers[index]} onChange={(e)=>handleCardNumber(index,e)} />)}
      </InputBox>
      <label>만료일</label>
      <InputBox>
        {Array.from({length: 2}, (_,index) => <Input type="number" value={dueDate[index]} onChange={(e)=>handleDueDate(index,e)} />)}
      </InputBox>
      <label>카드 소유자 이름 (선택)</label>
      <InputBox>
        <Input type="text" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
      </InputBox>
      <label>보안 코드(CVC/CVV)</label>
      <InputBox>
        <Input type="password" />
      </InputBox>
      <label>카드 비밀번호</label>
      <InputBox>
        <Input type="password" />
      </InputBox>
      <InputBox>
        <Input type="password" />
      </InputBox>
    </>
  )
}

export default AddPage