import { useRef } from 'react'
import PropTypes from 'prop-types'

import InputBox from 'components/common/InputBox'
import { isInvalidPassword } from 'validation'

import { FormWrapper, Label } from 'components/common/Form/style'
import { PasswordWrapper, Dot } from 'components/PasswordForm/style'

function PasswordForm({ password, setPassword }) {
  const secondPasswordInputRef = useRef()

  const handlePasswordChange = ({ target: { value } }, key) => {
    if (isInvalidPassword(value)) return

    setPassword((prev) => {
      const newState = { ...prev }
      newState[key] = value
      return newState
    })

    if (value.length >= 1) {
      secondPasswordInputRef.current.focus()
    }
  }

  return (
    <FormWrapper>
      <Label>
        <label>카드 비밀번호</label>
      </Label>
      <PasswordWrapper>
        <InputBox
          inputInfo={[
            {
              type: 'password',
              id: 'first-password',
              value: password.firstPassword,
              key: 'firstPassword',
            },
          ]}
          size={12}
          onChange={handlePasswordChange}
        />
        <InputBox
          inputInfo={[
            {
              type: 'password',
              id: 'second-password',
              value: password.secondPassword,
              key: 'secondPassword',
              ref: secondPasswordInputRef,
            },
          ]}
          size={12}
          onChange={handlePasswordChange}
        />
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
    </FormWrapper>
  )
}

PasswordForm.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func,
}

export default PasswordForm
