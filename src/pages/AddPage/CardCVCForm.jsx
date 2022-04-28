import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { FormWrapper,CVCWrapper } from './style'
import { ReactComponent as QuestionMark } from '../../assets/questionMark.svg';

function CardCVCForm({cvc, handleCvc}) {
  return (
    <FormWrapper>
        <label>보안 코드(CVC/CVV)</label>
    <CVCWrapper>
      <InputBox size="30">
        <Input type="password" value={cvc} onChange={handleCvc} />
      </InputBox>
      <QuestionMark/>
    </CVCWrapper>
 </FormWrapper>
  )
}

export default CardCVCForm