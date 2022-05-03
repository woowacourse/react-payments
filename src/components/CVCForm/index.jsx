import Form from 'components/common/Form'
import { isInvalidCVC } from 'validation'

function CVCForm({ cvc, setCvc }) {
  const handleCvc = ({ target: { value } }) => {
    if (isInvalidCVC(value)) return

    setCvc(value)
  }

  return (
    <Form
      label="보안 코드(CVC/CVV)"
      size={30}
      inputInfo={[{ type: 'password', id: 'cvc', value: cvc }]}
      onChange={handleCvc}
      helpText="카드 뒷면의 7자리 숫자 중 마지막 3자리"
    />
  )
}

export default CVCForm
