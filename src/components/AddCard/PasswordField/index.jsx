import { useContext } from 'react'

import CardInfoContext from 'context/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'
import useAutoFocus from 'hooks/useAutoFocus'

import { GrayInputWrapper } from 'components/common/Input/style'
import { Dot } from 'components/AddCard/PasswordField/style'

import { PASSWORD } from 'constant'
import { isInvalidPassword } from 'validation'

function PasswordField() {
  const {
    cardInfo: { password },
    setPassword,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({
    maxLength: [PASSWORD.UNIT_LENGTH, PASSWORD.UNIT_LENGTH],
  })

  const handleInputChange = ({ target }, key) => {
    const { value } = target
    if (isInvalidPassword(value)) return
    setPassword(target, key)
    moveToNextInput(target)
  }

  return (
    <Field label={'카드 비밀번호'}>
      <GrayInputWrapper size={12}>
        <Input
          type="password"
          dataset="first"
          value={password.first}
          maxLength={PASSWORD.UNIT_LENGTH}
          onChange={(e) => handleInputChange(e, 'first')}
          ref={(node) => {
            refList.current[0] = node
          }}
        />
      </GrayInputWrapper>
      <GrayInputWrapper size={12}>
        <Input
          type="password"
          dataset="second"
          value={password.second}
          maxLength={PASSWORD.UNIT_LENGTH}
          onChange={(e) => handleInputChange(e, 'second')}
          ref={(node) => {
            refList.current[1] = node
          }}
        />
      </GrayInputWrapper>
      <Dot>•</Dot>
      <Dot>•</Dot>
    </Field>
  )
}

export default PasswordField
