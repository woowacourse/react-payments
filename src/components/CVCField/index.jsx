import { useContext } from 'react'
import PropTypes from 'prop-types'

import CardInfoContext from 'store/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

function CVCField() {
  const {
    cardInfo: { cvc },
    handleCvcChange,
  } = useContext(CardInfoContext)

  return (
    <Field
      label="보안 코드(CVC/CVV)"
      helpText="카드 뒷면의 7자리 숫자 중 마지막 3자리"
    >
      <GrayInputWrapper size={30}>
        <Input
          type="password"
          value={cvc}
          maxLength={3}
          onChange={handleCvcChange}
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
