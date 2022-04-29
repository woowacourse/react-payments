import InputBox from "../InputBox";
import { FormWrapper, Label } from '../Form/style'
import { PasswordWrapper, Dot } from './style'

function PasswordForm(props){
  const {label, inputInfo, size, onChangeFirst, onChangeSecond} = props;

  return (
    <FormWrapper>
      <Label>
        <label>{label}</label>
      </Label>
      <PasswordWrapper>
        <InputBox inputInfo={[inputInfo[0]]} size={size} onChange={onChangeFirst}/>
        <InputBox inputInfo={[inputInfo[1]]} size={size} onChange={onChangeSecond}/>
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
    </FormWrapper>
  )
}

export default PasswordForm;