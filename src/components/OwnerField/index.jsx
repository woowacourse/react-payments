import { useContext } from 'react'

import CardInfoContext from 'store/cardInfo-context'
import { OWNER } from 'constant'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

function OwnerField() {
  const {
    cardInfo: { owner },
    handleOwnerChange,
  } = useContext(CardInfoContext)

  return (
    <Field label="카드 소유자 이름 (선택)" countHelper={OWNER.MAX_LENGTH}>
      <GrayInputWrapper>
        <Input value={owner} onChange={handleOwnerChange} />
      </GrayInputWrapper>
    </Field>
  )
}

export default OwnerField
