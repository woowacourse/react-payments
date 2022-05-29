import { useContext } from 'react'

import CardInfoContext from 'context/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'

import { GrayInputWrapper } from 'components/common/Input/style'

import { OWNER } from 'constants/index'
import { isInvalidOwner } from 'validation'

function OwnerField() {
  const {
    cardInfo: { owner },
    setOwner,
  } = useContext(CardInfoContext)

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    if (isInvalidOwner(value)) return

    setOwner(target)
  }

  return (
    <Field
      label="카드 소유자 이름 (선택)"
      countHelper={`${owner.length} / ${OWNER.MAX_LENGTH}`}
    >
      <GrayInputWrapper>
        <Input
          value={owner}
          onChange={handleInputChange}
          maxLength={OWNER.MAX_LENGTH}
        />
      </GrayInputWrapper>
    </Field>
  )
}

export default OwnerField
