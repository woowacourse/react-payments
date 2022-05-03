import Form from 'components/common/Form'
import { OWNER } from 'constant'
import { isInvalidOwner } from 'validation'

function OwnerForm({ owner, setOwner }) {
  const handleOwnerChange = ({ target: { value } }) => {
    if (isInvalidOwner(value)) return

    setOwner(value)
  }

  return (
    <Form
      label="카드 소유자 이름 (선택)"
      countHelper={OWNER.MAX_LENGTH}
      inputInfo={[
        {
          type: 'string',
          id: 'owner',
          value: owner,
          placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
        },
      ]}
      onChange={handleOwnerChange}
    />
  )
}

export default OwnerForm
