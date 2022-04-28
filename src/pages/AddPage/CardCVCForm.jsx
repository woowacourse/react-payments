import { useState } from 'react';
import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { FormWrapper, CVCWrapper, HelpTextWrapper } from './style'
import { ReactComponent as QuestionMark } from '../../assets/questionMark.svg';

function CardCVCForm({cvc, handleCvc}) {
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseHover = () => {
    setMouseHover((prev) => !prev);
  }

  return (
    <FormWrapper>
        <label>보안 코드(CVC/CVV)</label>
    <CVCWrapper>
      <InputBox size="30">
        <Input type="password" value={cvc} onChange={handleCvc}/>
      </InputBox>
      <QuestionMark onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}/>
      {mouseHover && <HelpTextWrapper>카드 뒷면의 7자리 숫자 중 마지막 3자리</HelpTextWrapper>}
    </CVCWrapper>
 </FormWrapper>
  )
}

export default CardCVCForm