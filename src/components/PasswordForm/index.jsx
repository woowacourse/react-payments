import PropTypes from 'prop-types'
import InputBox from 'components/InputBox'
import { FormWrapper, Label } from 'components/Form/style'
import { PasswordWrapper, Dot } from 'components/PasswordForm/style'
import { Fragment } from 'react'

function PasswordForm({ label, inputInfo, size, onChange }) {
  return (
    <FormWrapper>
      <Label>
        <label>{label}</label>
      </Label>
      <PasswordWrapper>
        {inputInfo.map((info) => (
          <Fragment key={info.key}>
            <InputBox inputInfo={[info]} size={size} onChange={onChange} />
          </Fragment>
        ))}
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
    </FormWrapper>
  )
}

PasswordForm.propTypes = {
  /**
   * form label 문구
   */
  label: PropTypes.string,
  inputInfo: PropTypes.array,
  /**
   * input 넓이
   */
  size: PropTypes.number,
  onChange: PropTypes.func,
}
export default PasswordForm
