import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { OwnerHeader, FormWrapper } from './style'

 function CardOwnerForm({owner, handleOwner}) {
  return (
    <FormWrapper>
      <OwnerHeader>
        <label>카드 소유자 이름 (선택)</label>
        <div>{owner.length}/30</div>
      </OwnerHeader>
      <InputBox>
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={owner}
          onChange={handleOwner}
        />
      </InputBox>
    </FormWrapper>
  )
}

export default CardOwnerForm