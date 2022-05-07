import { useContext } from 'react'

import CardInfoContext from 'store/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'

import { GrayInputWrapper } from 'components/common/Input/style'

import { OWNER } from 'constant'

function OwnerField() {
  const {
    cardInfo: { owner },
    handleOwnerChange,
  } = useContext(CardInfoContext)

  return (
    <Field
      label="카드 소유자 이름 (선택)"
      countHelper={`${owner.length} / ${OWNER.MAX_LENGTH}`}
    >
      <GrayInputWrapper>
        <Input
          value={owner}
          onChange={handleOwnerChange}
          maxLength={OWNER.MAX_LENGTH}
        />
      </GrayInputWrapper>
    </Field>
  )
}

export default OwnerField
