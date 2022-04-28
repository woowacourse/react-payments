import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { PasswordWrapper, Dot } from './style'

function CardPasswordForm({password, handlePassword, secondPasswordInputRef}){
  return (
  <>
    <label>카드 비밀번호</label>
      <PasswordWrapper>
        <InputBox size="10">
          <Input type="password" value={password.firstPassword} onChange={(e) => handlePassword('firstPassword', e)} />
        </InputBox>
        <InputBox size="10">
          <Input type="password" ref={secondPasswordInputRef} value={password.secondPassword} onChange={(e) => handlePassword('secondPassword', e)} />
        </InputBox>
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
  </>
  )
}

export default CardPasswordForm;