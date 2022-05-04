import PropTypes from 'prop-types'

import Field from 'components/common/Field'
import { OWNER } from 'constant'
import { isInvalidOwner } from 'validation'

function OwnerField({ owner, setOwner }) {
  const handleOwnerChange = ({ target: { value } }) => {
    if (isInvalidOwner(value)) return

    setOwner(value.toUpperCase())
  }

  return (
    <Field
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

OwnerField.propTypes = {
  owner: PropTypes.string,
  setOwner: PropTypes.func,
}

export default OwnerField
