import { useContext } from 'react'
import PropTypes from 'prop-types'

import CardInfoContext from 'context/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

import { CVC } from 'constant'
import { isInvalidCVC } from 'validation'

function CVCField() {
  const {
    cardInfo: { cvc },
    setCvc,
  } = useContext(CardInfoContext)

  const handleInputChange = ({ target }) => {
    const { value } = target
    if (isInvalidCVC(value)) return

    setCvc(target)
  }

  return (
    <Field
      label="보안 코드(CVC/CVV)"
      helpText="카드 뒷면의 7자리 숫자 중 마지막 3자리"
    >
      <GrayInputWrapper size={30}>
        <Input
          type="password"
          value={cvc}
          maxLength={CVC.UNIT_LENGTH}
          onChange={handleInputChange}
        />
      </GrayInputWrapper>
    </Field>
  )
}

CVCField.propTypes = {
  cvc: PropTypes.string,
  setCvc: PropTypes.func,
}

export default CVCField
