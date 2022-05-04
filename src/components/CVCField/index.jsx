import Field from 'components/common/Field'
import { isInvalidCVC } from 'validation'
import PropTypes from 'prop-types'

function CVCField({ cvc, setCvc }) {
  const handleCvc = ({ target: { value } }) => {
    if (isInvalidCVC(value)) return

    setCvc(value)
  }

  return (
    <Field
      label="보안 코드(CVC/CVV)"
      size={30}
      inputInfo={[{ type: 'password', id: 'cvc', value: cvc }]}
      onChange={handleCvc}
      helpText="카드 뒷면의 7자리 숫자 중 마지막 3자리"
    />
  )
}

CVCField.propTypes = {
  cvc: PropTypes.string,
  setCvc: PropTypes.func,
}

export default CVCField
